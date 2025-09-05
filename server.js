// server.js
import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

/* ---------------- CORS ---------------- */
app.use(
  cors({
    origin: ["https://www.myskript.io", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

/* ---------------- Logger ---------------- */
app.use((req, _res, next) => {
  console.log(`➡️ ${req.method} ${req.url}`);
  next();
});

/* ---------------- MONGOOSE (robust connect) ---------------- */
mongoose.set("strictQuery", false);

const connectWithRetry = async (retries = 5, delayMs = 5000) => {
  const uri = process.env.DATABASE_URL;
  if (!uri) {
    console.error("❌ DATABASE_URL not set in environment variables");
    process.exit(1);
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
      });
      console.log("✅ MongoDB connected");
      return;
    } catch (err) {
      console.error(
        `❌ MongoDB connection attempt ${attempt} failed:`,
        err.message || err
      );
      if (attempt < retries) {
        console.log(`⏳ Retrying in ${delayMs / 1000}s...`);
        await new Promise((r) => setTimeout(r, delayMs));
      } else {
        console.error("❌ All MongoDB connection attempts failed.");
        process.exit(1);
      }
    }
  }
};
connectWithRetry();

/* ---------------- SCHEMAS & MODELS ---------------- */
const UserSchema = new mongoose.Schema({
  customerId: String,
  subscriptionId: String,
  email: { type: String, unique: true, sparse: true, index: true },
  name: String,
  phone: String,
  planId: String,
  status: { type: String, default: "trial" }, // trial | active | cancelled | registered
  startDate: { type: Date, default: Date.now },
  nextBilling: Date,
  passwordHash: String,
  createdAt: { type: Date, default: Date.now },

  // Email OTP password reset
  resetOtpHash: String,          // bcrypt hash of OTP
  resetOtpExpires: Date,         // expiry time
  resetOtpAttempts: { type: Number, default: 0 }, // throttle brute force
});

const BusinessSchema = new mongoose.Schema({
  customerId: String,
  customerName: String,
  customerEmail: { type: String, index: true },
  customerPhone: String,
  fullName: String,
  businessName: String,
  businessAddress: String,
  businessEmail: String,
  businessPhone: String,
  businessIndustry: String,
  businessDescription: String,
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
const Business = mongoose.models.Business || mongoose.model("Business", BusinessSchema);

/* ---------------- RAZORPAY ---------------- */
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/* ---------------- PLANS ---------------- */
const planDetails = {
  "plan_R1uo385RzbRIKA": { name: "Standard Plan", price: "₹4,850", period: "month" },
  "plan_R1uqJGdXsakTwx": { name: "Premium Plan", price: "₹6,450", period: "month" },
  "plan_R1uqvnksOBtSEH": { name: "Enterprise Plan", price: "₹9,850", period: "month" },
  "plan_R1usIilBLpME0T": { name: "Standard Plan", price: "₹48,500", period: "year" },
  "plan_R1uyUso2JEH0hG": { name: "Premium Plan", price: "₹64,500", period: "year" },
  "plan_R1v1VETXTsHy3p": { name: "Enterprise Plan", price: "₹98,500", period: "year" },
};

/* ---------------- EMAIL (Nodemailer) ---------------- */
const hasSmtp =
  !!process.env.SMTP_HOST &&
  !!process.env.SMTP_PORT &&
  !!process.env.SMTP_USER &&
  !!process.env.SMTP_PASS;

let transporter = null;
if (hasSmtp) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: !!(process.env.SMTP_SECURE === "true"),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/** Send OTP email (logs to console in dev if SMTP not set) */
async function sendOtpEmail(to, otp) {
  const from = process.env.FROM_EMAIL || "no-reply@myskript.io";
  const appName = process.env.APP_NAME || "MySkript";

  const subject = `${appName} Password Reset OTP`;
  const text =
    `Your ${appName} password reset OTP is: ${otp}\n` +
    `This OTP is valid for 15 minutes. If you didn't request this, you can ignore this email.`;

  if (transporter) {
    await transporter.sendMail({ from, to, subject, text });
  } else {
    // Safe fallback for development only
    console.log("📧 [DEV] OTP email (SMTP not configured):");
    console.log({ to, subject, text });
  }
}

/* ---------------- HELPER: safe compare for webhook ---------------- */
function safeCompareHex(a, b) {
  try {
    if (!a || !b) return false;
    const ab = Buffer.from(a, "hex");
    const bb = Buffer.from(b, "hex");
    if (ab.length !== bb.length) return false;
    return crypto.timingSafeEqual(ab, bb);
  } catch {
    return false;
  }
}

/* ---------------- WEBHOOK (raw body) ---------------- */
/*
  Important: keep this route before express.json() so raw body is available.
*/
app.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  try {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!secret) {
      console.warn("⚠️ RAZORPAY_WEBHOOK_SECRET not set; skipping verification (not recommended).");
    }

    const signature = req.headers["x-razorpay-signature"];
    const body = req.body.toString();
    const digest = crypto.createHmac("sha256", secret || "").update(body).digest("hex");

    if (secret && !safeCompareHex(digest, signature)) {
      console.error("❌ Invalid webhook signature");
      return res.status(400).send("Invalid signature");
    }

    const event = JSON.parse(body);
    console.log("✅ Webhook Event:", event.event);

    if (event.event === "subscription.activated") {
      const subId = event.payload?.subscription?.entity?.id;
      if (subId) await User.updateOne({ subscriptionId: subId }, { status: "active" }).exec();
    }

    if (event.event === "subscription.pending") {
      const subId = event.payload?.subscription?.entity?.id;
      if (subId) await User.updateOne({ subscriptionId: subId }, { status: "trial" }).exec();
    }

    if (event.event === "subscription.cancelled") {
      const subId = event.payload?.subscription?.entity?.id;
      if (subId) await User.updateOne({ subscriptionId: subId }, { status: "cancelled" }).exec();
    }

    res.status(200).send("OK");
  } catch (err) {
    console.error("❌ Webhook error:", err);
    res.status(500).send("Webhook error");
  }
});

/* ---------------- Parse JSON for all other routes ---------------- */
app.use(express.json());

/* ---------------- AUTH MIDDLEWARE ---------------- */
const authenticate = (req, res, next) => {
  const header = req.headers.authorization || "";
  const token = header.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (e) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

/* ---------------- ROUTES ---------------- */

// Health check
app.get("/", (_req, res) => res.send("🚀 Razorpay Subscription Server Running"));

/**
 * Register
 * Body: { email, phone, password, name }
 */
app.post("/register", async (req, res) => {
  try {
    const { email, phone, password, name } = req.body || {};
    if (!email || !phone || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existing = await User.findOne({ email }).exec();
    const hash = await bcrypt.hash(password, 10);

    if (!existing) {
      await new User({
        email,
        phone,
        name,
        passwordHash: hash,
        status: "registered",
      }).save();
      return res.json({ success: true, message: "Registration successful. Please login." });
    }

    // If user exists but no password set yet (created via subscription flow)
    if (!existing.passwordHash) {
      existing.phone = phone || existing.phone;
      existing.name = name || existing.name;
      existing.passwordHash = hash;
      existing.status = existing.status || "registered";
      await existing.save();
      return res.json({ success: true, message: "Password set. Please login." });
    }

    return res.status(400).json({
      message: "User already registered. Please login.",
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Register failed" });
  }
});

/**
 * Login
 * Body: { email, phone, password }
 */
app.post("/login", async (req, res) => {
  try {
    const { email, phone, password } = req.body || {};
    if (!email || !phone || !password)
      return res.status(400).json({ message: "All fields required" });

    const user = await User.findOne({ email, phone }).exec();
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.passwordHash) {
      return res.status(400).json({
        message: "No password set yet. Please go to Register to set your password.",
      });
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    res.json({ token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed" });
  }
});

/**
 * Forgot Password (send OTP to email)
 * Body: { email }
 * Returns: { success, message }
 */
/**
/**
 * Forgot Password (send OTP to email)
 */
app.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body || {};
    if (!email)
      return res.status(400).json({ message: "Email is required" });

    const user = await User.findOne({ email }).exec();
    if (!user)
      return res.status(404).json({ message: "User not found" });

    // generate 6-digit OTP
    const otp = (Math.floor(100000 + Math.random() * 900000)).toString();

    // store hash & expiry
    user.resetOtpHash = await bcrypt.hash(otp, 10);
    user.resetOtpExpires = new Date(Date.now() + 15 * 60 * 1000);
    user.resetOtpAttempts = 0;
    await user.save();

    await sendOtpEmail(email, otp); // 👉 SMTP error may occur here

    res.json({ success: true, message: "OTP has been sent to your email ✅" });
  } catch (err) {
    console.error("Forgot password error:", err); // 👉 Error will be visible here
    res.status(500).json({ message: "Problem while sending OTP ❌" });
  }
});

/**
 * Reset Password (verify OTP)
 * Body: { email, otp, newPassword }
 * Returns: { success, message }
 */
app.post("/reset-password", async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body || {};
    if (!email || !otp || !newPassword)
      return res
        .status(400)
        .json({ message: "Email, OTP, and new password are required" });

    const user = await User.findOne({ email }).exec();
    if (!user || !user.resetOtpHash || !user.resetOtpExpires) {
      return res
        .status(400)
        .json({ message: "No active OTP found. Please request a new one." });
    }

    if (user.resetOtpExpires.getTime() < Date.now()) {
      // clear expired OTP details
      user.resetOtpHash = undefined;
      user.resetOtpExpires = undefined;
      user.resetOtpAttempts = 0;
      await user.save();
      return res.status(400).json({ message: "OTP has expired. Please request a new one." });
    }

    const ok = await bcrypt.compare(otp, user.resetOtpHash);
    if (!ok) {
      user.resetOtpAttempts = (user.resetOtpAttempts || 0) + 1;
      await user.save();
      return res.status(401).json({ message: "Invalid OTP" });
    }

    // success: update password & clear OTP fields
    user.passwordHash = await bcrypt.hash(newPassword, 10);
    user.resetOtpHash = undefined;
    user.resetOtpExpires = undefined;
    user.resetOtpAttempts = 0;
    await user.save();

    res.json({ success: true, message: "Password successfully reset ✅" });
  } catch (err) {
    console.error("Reset password error:", err); // 👉 Error will be visible here
    res.status(500).json({ message: "Problem while resetting password ❌" });
  }
});


/**
 * Create subscription
 * Body: { customer_email, customer_name, customer_phone, plan_id }
 *

/* ---------------- Create Subscription ---------------- */
app.post("/create-subscription", async (req, res) => {
  try {
    const { customer_email, customer_name, customer_phone, plan_id, withTrial } = req.body || {};
    if (!customer_email || !customer_phone || !plan_id) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // Check existing Razorpay customer
    let customer;
    try {
      const customers = await razorpay.customers.all({ email: customer_email });
      customer = customers.items?.[0];
    } catch (e) {
      console.warn("Razorpay customers.all failed:", e?.message || e);
    }

    if (!customer) {
      customer = await razorpay.customers.create({
        name: customer_name,
        email: customer_email,
        contact: customer_phone,
      });
    }

    const now = Math.floor(Date.now() / 1000);
    const trialEnd = now + 7 * 24 * 60 * 60;

    // ✅ Trial → delay start | Else → start immediately
    const subscriptionData = {
      plan_id,
      customer_id: customer.id,
      total_count: 12,
      customer_notify: 1,
    };
    if (withTrial) subscriptionData.start_at = trialEnd;

    const subscription = await razorpay.subscriptions.create(subscriptionData);

    // Upsert User in DB
    let existing = await User.findOne({ email: customer_email }).exec();
    if (!existing) {
      existing = new User({
        customerId: customer.id,
        subscriptionId: subscription.id,
        email: customer_email,
        name: customer_name,
        phone: customer_phone,
        planId: plan_id,
        status: withTrial ? "trial" : "active",
        startDate: new Date(),
        nextBilling: withTrial ? new Date(trialEnd * 1000) : new Date(),
      });
    } else {
      existing.customerId = customer.id;
      existing.subscriptionId = subscription.id;
      existing.name = existing.name || customer_name;
      existing.phone = existing.phone || customer_phone;
      existing.planId = plan_id;
      existing.status = withTrial ? "trial" : "active";
      existing.nextBilling = withTrial ? new Date(trialEnd * 1000) : new Date();
    }
    await existing.save();

    // Send emails after saving
    try {
      await sendSubscriptionEmails({
        customer_name: customer_name || existing.name || "",
        customer_email: customer_email || existing.email || "",
        customer_phone: customer_phone || existing.phone || "",
        plan_id: plan_id,
        subscription_id: subscription.id,
        withTrial: !!withTrial,
      });
    } catch (e) {
      console.warn("📧 Subscription email send failed:", e?.message || e);
    }

    // JWT token
    const token = jwt.sign(
      { id: existing._id, email: customer_email },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      subscriptionId: subscription.id,
      customerId: customer.id,
      key: process.env.RAZORPAY_KEY_ID,
      token,
      message: withTrial
        ? "Trial subscription created successfully."
        : "Direct subscription created successfully.",
    });
  } catch (err) {
    console.error("Create-subscription error:", err);
    res.status(500).json({ message: "Create subscription failed", error: err.message });
  }
});


/**
 * User dashboard: requires auth
 */
app.get("/user-dashboard", authenticate, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).lean().exec();
    if (!user) return res.status(404).json({ message: "User not found" });

    let subscription = null;
    try {
      if (user.subscriptionId) {
        const sub = await razorpay.subscriptions.fetch(user.subscriptionId);
        subscription = {
          id: sub.id,
          status: sub.status,
          currentStartMs: sub.current_start ? sub.current_start * 1000 : null,
          currentEndMs: sub.current_end ? sub.current_end * 1000 : null,
        };
      }
    } catch (e) {
      console.warn("Subscription fetch failed:", e?.message || e);
    }

    const plan = user.planId ? (planDetails[user.planId] || {}) : null;
    const business = await Business.findOne({ customerEmail: user.email }).lean().exec();

    res.json({ user, subscription, plan, business });
  } catch (err) {
    console.error("Dashboard error:", err);
    res.status(500).json({ message: "Dashboard failed" });
  }
});

/**
 * Cancel subscription (auth required)
 * Body: { subscription_id }
 */
app.post("/cancel-subscription", authenticate, async (req, res) => {
  try {
    const { subscription_id } = req.body || {};
    if (!subscription_id) return res.status(400).json({ message: "subscription_id is required" });

    const user = await User.findOne({ email: req.user.email }).exec();
    if (!user || user.subscriptionId !== subscription_id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    // If already cancelled, return gracefully
    try {
      const sub = await razorpay.subscriptions.fetch(subscription_id);
      if (sub.status === "cancelled") {
        await User.updateOne({ _id: user._id }, { status: "cancelled" }).exec();
        return res.json({ success: true, message: "Subscription already cancelled" });
      }
    } catch (e) {
      console.warn("Fetch before cancel failed (continuing):", e?.message || e);
    }

    await razorpay.subscriptions.cancel(subscription_id);
    await User.updateOne({ _id: user._id }, { status: "cancelled" }).exec();

    res.json({ success: true, message: "Subscription cancelled" });
  } catch (err) {
    console.error("Cancel-subscription error:", err);
    res.status(500).json({ message: "Cancel subscription failed" });
  }
});


/** Send plain email */
async function sendEmail({ to, subject, text, html }) {
  if (!transporter) {
    console.log("📧 [DEV] Email (SMTP not configured):", { to, subject, text });
    return;
  }
  const from = process.env.FROM_EMAIL || "no-reply@myskript.io";
  await transporter.sendMail({ from, to, subject, text, html });
}

/** Subscription email templates */
function buildSubscriptionEmails({ customer_name, customer_email, customer_phone, plan_id, subscription_id, withTrial }) {
  const plan = planDetails[plan_id] || {};
  const appName = process.env.APP_NAME || "MySkript";
  const trialMsg = withTrial
    ? `✅ 7-Day Free Trial has started. After the trial ends, auto-deduction will occur (${plan.price} / ${plan.period}).`
    : `✅ Direct subscription was successful. Next billing: ${plan.price} / ${plan.period}.`;

  const userSubject = `${appName}: Subscription Created (${plan.name || "Selected Plan"})`;
  const userText =
`${customer_name}, Hello!

Your subscription has been successfully created.

Plan: ${plan.name || "-"}
Price/Period: ${plan.price || "-"} / ${plan.period || "-"}
Subscription ID: ${subscription_id}
Email: ${customer_email}
Phone: ${customer_phone}

${trialMsg}

If you have any questions, reply to this email.
Thank you,
${appName} Team`;

  const userHtml = `
  <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6">
    <p>${customer_name}, Hello!</p>
    <p>Your <b>subscription</b> has been successfully created.</p>
    <ul>
      <li><b>Plan:</b> ${plan.name || "-"}</li>
      <li><b>Price/Period:</b> ${plan.price || "-"} / ${plan.period || "-"}</li>
      <li><b>Subscription ID:</b> ${subscription_id}</li>
      <li><b>Email:</b> ${customer_email}</li>
      <li><b>Phone:</b> ${customer_phone}</li>
    </ul>
    <p>${trialMsg}</p>
    <p>If you have any questions, reply to this email.</p>
    <p>Thank you,<br/>${appName} Team</p>
  </div>`;

  const adminSubject = `${appName}: New Subscription - ${plan.name || "Plan"} (${customer_email})`;
  const adminText =
`New subscription created:

Customer: ${customer_name}
Email: ${customer_email}
Phone: ${customer_phone}
Plan: ${plan.name || "-"}
Price/Period: ${plan.price || "-"} / ${plan.period || "-"}
Subscription ID: ${subscription_id}
Mode: ${withTrial ? "TRIAL (₹5 reg fee)" : "DIRECT"}

— Server notification`;

  const adminHtml = `
  <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6">
    <h3>New subscription created</h3>
    <ul>
      <li><b>Customer:</b> ${customer_name}</li>
      <li><b>Email:</b> ${customer_email}</li>
      <li><b>Phone:</b> ${customer_phone}</li>
      <li><b>Plan:</b> ${plan.name || "-"}</li>
      <li><b>Price/Period:</b> ${plan.price || "-"} / ${plan.period || "-"}</li>
      <li><b>Subscription ID:</b> ${subscription_id}</li>
      <li><b>Mode:</b> ${withTrial ? "TRIAL (₹5 reg fee)" : "DIRECT"}</li>
    </ul>
  </div>`;

  return {
    user: { subject: userSubject, text: userText, html: userHtml },
    admin: { subject: adminSubject, text: adminText, html: adminHtml }
  };
}

/** Send both user + admin emails */
async function sendSubscriptionEmails(payload) {
  const { user, admin } = buildSubscriptionEmails(payload);

  // User email
  await sendEmail({
    to: payload.customer_email,
    subject: user.subject,
    text: user.text,
    html: user.html,
  });

  // Admin email
  await sendEmail({
    to: "myskript.infotech@gmail.com",
    subject: admin.subject,
    text: admin.text,
    html: admin.html,
  });
}


/**
 * Save business info
 * Body: { customerId, customerName, customerEmail, ... }
 */
app.post("/save-business-info", async (req, res) => {
  try {
    const {
      customerEmail,
      businessName,
      businessEmail,
    } = req.body || {};

    if (!customerEmail || !businessName || !businessEmail) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newBusiness = new Business(req.body);
    await newBusiness.save();

    res.status(201).json({ success: true, message: "Business info saved successfully" });
  } catch (err) {
    console.error("Save business info error:", err);
    res.status(500).json({ success: false, message: "Failed to save business info" });
  }
});

/**
 * Get all subscriptions (admin-like)
 */
app.get("/get-all-subscriptions", async (_req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 }).exec();

    const subscriptions = await Promise.all(
      users.map(async (user) => {
        let status = user.status;
        let subscriptionId = user.subscriptionId;
        try {
          if (user.subscriptionId) {
            const sub = await razorpay.subscriptions.fetch(user.subscriptionId);
            status = sub.status;
            subscriptionId = sub.id;
          }
        } catch {
          // ignore fetch error; use stored values
        }

        const business = await Business.findOne({ customerEmail: user.email }).lean().exec();

        return {
          _id: user._id.toString(),
          customerName: user.name,
          customerEmail: user.email,
          customerPhone: user.phone,
          planName: planDetails[user.planId]?.name || "Unknown Plan",
          planPrice: planDetails[user.planId]?.price || "₹0",
          status,
          subscriptionId,
          createdAt: user.createdAt,
          businessInfo: business
            ? {
                fullName: business.fullName,
                businessName: business.businessName,
                businessEmail: business.businessEmail,
                businessPhone: business.businessPhone,
                businessAddress: business.businessAddress,
                businessIndustry: business.businessIndustry,
                businessDescription: business.businessDescription,
              }
            : null,
        };
      })
    );

    res.json({ subscriptions });
  } catch (err) {
    console.error("Fetch all subscriptions error:", err);
    res.status(500).json({ error: "Failed to fetch subscriptions" });
  }
});

/* ---------------- START ---------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server live on port ${PORT}`));
