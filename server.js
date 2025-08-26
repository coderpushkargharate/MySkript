// server.js
import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

dotenv.config();

// ✅ Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("✅ MongoDB connected"));

// ✅ User Schema
const userSchema = new mongoose.Schema({
  customerId: String,
  subscriptionId: String,
  email: String,
  name: String,
  phone: String,
  planId: String,
  status: { type: String, default: "trial" },
  startDate: { type: Date, default: Date.now },
  nextBilling: Date,
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

// ✅ Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Express App
const app = express();
app.use(
  cors({
    origin: "https://myskript.io", // ✅ without trailing slash
    methods: ["GET", "POST"],
    allowedHeaders: ["*"],
  })
);

app.use(express.json());

// ✅ JWT Authentication Middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token" });
  }
};

// ✅ Request Logger
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.url}`);
  next();
});

// ✅ Plan Details (Reusable)
const planDetails = {
  "plan_R1uo385RzbRIKA": { name: "Standard Plan", price: "₹4,850", period: "month" },
  "plan_R1uqJGdXsakTwx": { name: "Premium Plan", price: "₹6,450", period: "month" },
  "plan_R1uqvnksOBtSEH": { name: "Enterprise Plan", price: "₹9,850", period: "month" },
  "plan_R1usIilBLpME0T": { name: "Standard Plan", price: "₹48,500", period: "year" },
  "plan_R1uyUso2JEH0hG": { name: "Premium Plan", price: "₹64,500", period: "year" },
  "plan_R1v1VETXTsHy3p": { name: "Enterprise Plan", price: "₹98,500", period: "year" },
};

// ✅ Create Subscription & Save User
app.post("/create-subscription", async (req, res) => {
  const { customer_email, customer_name, customer_phone, plan_id } = req.body;

  if (!plan_id || !customer_email || !customer_name || !customer_phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Check if customer already exists
    let customers = await razorpay.customers.all({ email: customer_email });
    let customer = customers.items?.[0];

    if (!customer) {
      customer = await razorpay.customers.create({
        name: customer_name,
        email: customer_email,
        contact: customer_phone,
      });
    }

    // Create subscription with 7-day trial
    const now = Math.floor(Date.now() / 1000);
    const trialEnd = now + 7 * 24 * 60 * 60;

    const subscription = await razorpay.subscriptions.create({
      plan_id,
      customer_id: customer.id,
      start_at: trialEnd,
      total_count: 12,
      customer_notify: 1,
      addons: [
        { item: { name: "Registration Fee", amount: 500, currency: "INR" } },
      ],
    });

    // Save user to DB
    const newUser = new User({
      customerId: customer.id,
      subscriptionId: subscription.id,
      email: customer_email,
      name: customer_name,
      phone: customer_phone,
      planId: plan_id,
      status: "trial",
      startDate: new Date(),
      nextBilling: new Date(trialEnd * 1000),
    });
    await newUser.save();

    // Generate JWT
    const token = jwt.sign(
      { id: newUser._id, email: customer_email },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      subscriptionId: subscription.id,
      customerId: customer.id,
      key: process.env.RAZORPAY_KEY_ID,
      token,
    });
  } catch (err) {
    console.error("❌ Subscription creation error:", err);
    res.status(500).json({
      error: "Subscription creation failed",
      message: err.message,
    });
  }
});

// ✅ GET User Dashboard (Protected)
app.get("/user-dashboard", authenticate, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const subscription = await razorpay.subscriptions.fetch(user.subscriptionId);
    const plan = planDetails[user.planId] || {
      name: "Unknown Plan",
      price: "N/A",
      period: "N/A",
    };

    res.json({
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        status: user.status,
        startDate: user.startDate,
        nextBilling: user.nextBilling,
      },
      subscription: {
        id: subscription.id,
        status: subscription.status,
        planId: subscription.plan_id,
        currentStart: new Date(subscription.current_start * 1000).toLocaleDateString(),
        currentEnd: new Date(subscription.current_end * 1000).toLocaleDateString(),
        pauseStatus: subscription.pause_status,
      },
      plan,
    });
  } catch (err) {
    console.error("❌ Dashboard fetch error:", err);
    res.status(500).json({ error: "Failed to load dashboard" });
  }
});

// ✅ Cancel Subscription
app.post("/cancel-subscription", authenticate, async (req, res) => {
  const { subscription_id } = req.body;

  if (!subscription_id) {
    return res.status(400).json({ message: "subscription_id is required" });
  }

  try {
    const cancelled = await razorpay.subscriptions.cancel(subscription_id);
    await User.updateOne(
      { subscriptionId: subscription_id },
      { status: "cancelled" }
    );
    res.json({ success: true, cancelled });
  } catch (err) {
    console.error("❌ Cancel Error:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ Webhook: Handle Razorpay Events
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const signature = req.headers["x-razorpay-signature"];
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const body = req.body;

    const digest = crypto
      .createHmac("sha256", secret)
      .update(body.toString())
      .digest("hex");

    if (digest === signature) {
      const event = JSON.parse(body);
      console.log("✅ Webhook Event:", event.event);

      if (event.event === "subscription.cancelled") {
        const subId = event.payload.subscription.entity.id;
        User.updateOne({ subscriptionId: subId }, { status: "cancelled" }).exec();
      }

      res.status(200).send("OK");
    } else {
      console.error("❌ Invalid webhook signature");
      res.status(400).send("Invalid signature");
    }
  }
);

// ✅ Admin: Get All Subscriptions (for Admin Dashboard)
app.get("/get-all-subscriptions", async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    const subscriptions = await Promise.all(
      users.map(async (user) => {
        try {
          const subscription = await razorpay.subscriptions.fetch(user.subscriptionId);
          return {
            _id: user._id,
            customerName: user.name,
            customerEmail: user.email,
            customerPhone: user.phone,
            planName: planDetails[user.planId]?.name || "Unknown Plan",
            planPrice: planDetails[user.planId]?.price || "₹0",
            status: subscription.status,
            subscriptionId: subscription.id,
            createdAt: user.createdAt,
          };
        } catch (err) {
          return {
            _id: user._id,
            customerName: user.name,
            customerEmail: user.email,
            customerPhone: user.phone,
            planName: planDetails[user.planId]?.name || "Unknown Plan",
            planPrice: planDetails[user.planId]?.price || "₹0",
            status: user.status,
            subscriptionId: user.subscriptionId,
            createdAt: user.createdAt,
          };
        }
      })
    );

    res.json({ subscriptions });
  } catch (err) {
    console.error("❌ Fetch all subscriptions error:", err);
    res.status(500).json({ error: "Failed to fetch subscriptions" });
  }
});

// ✅ Health Check
app.get("/", (req, res) => {
  res.send("🚀 Razorpay Subscription Server Running");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server live on port ${PORT}`);
});