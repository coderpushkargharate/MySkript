// server.js
import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "*", // ✅ Update to your actual frontend domain
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ✅ Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Log incoming request (debug only)
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.url}`);
  next();
});

// ✅ Parse JSON body (after webhook)
app.use(express.json());

// ✅ Plan reference (not required, but useful)
const planDetails = {
  "plan_R1uo385RzbRIKA": { name: "Standard Plan", price: "₹4,850", period: "month" },
  "plan_R1uqJGdXsakTwx": { name: "Premium Plan", price: "₹6,450", period: "month" },
  "plan_R1uqvnksOBtSEH": { name: "Enterprise Plan", price: "₹9,850", period: "month" },
  "plan_R1usIilBLpME0T": { name: "Standard Plan", price: "₹48,500", period: "year" },
  "plan_R1uyUso2JEH0hG": { name: "Premium Plan", price: "₹64,500", period: "year" },
  "plan_R1v1VETXTsHy3p": { name: "Enterprise Plan", price: "₹98,500", period: "year" }
};

// ✅ Create Subscription
app.post("/create-subscription", async (req, res) => {
  const { customer_email, customer_name, customer_phone, plan_id } = req.body;

  if (!plan_id || !customer_email || !customer_name || !customer_phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Check if customer exists
    const customers = await razorpay.customers.all({ email: customer_email });
    let customer = customers.items[0] || await razorpay.customers.create({
      name: customer_name,
      email: customer_email,
      contact: customer_phone,
    });

    // Create subscription
    const subscription = await razorpay.subscriptions.create({
      plan_id,
      customer_id: customer.id,
      total_count: 12,
      start_at: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60,
      customer_notify: 1,
      addons: [
        {
          item: {
            name: "Registration Fee",
            amount: 500, // ₹5 in paise
            currency: "INR",
          }
        }
      ]
    });

    res.json({
      subscriptionId: subscription.id,
      customerId: customer.id,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error("❌ Subscription creation error:", err);
    res.status(500).json({ error: "Subscription creation failed", message: err.message });
  }
});

// ✅ Cancel Subscription
app.post("/cancel-subscription", async (req, res) => {
  const { subscription_id } = req.body;

  if (!subscription_id) {
    return res.status(400).json({ message: "subscription_id is required" });
  }

  try {
    const cancelled = await razorpay.subscriptions.cancel(subscription_id);
    res.json({ success: true, cancelled });
  } catch (err) {
    console.error("❌ Cancel Error:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ Webhook (add Razorpay secret check in production)
app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const signature = req.headers["x-razorpay-signature"];
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET || "test_secret";

  const digest = crypto
    .createHmac("sha256", secret)
    .update(req.body.toString())
    .digest("hex");

  if (digest === signature) {
    console.log("✅ Webhook verified");
    res.status(200).send("OK");
  } else {
    console.warn("❌ Webhook signature mismatch");
    res.status(400).send("Invalid signature");
  }
});

// ✅ Health check
app.get("/", (req, res) => {
  res.send("🚀 Razorpay Subscription Server Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server live on port ${PORT}`);
});
