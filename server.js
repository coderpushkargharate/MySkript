// server.js
import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "rzp_live_2GkWNKTX6hpamw",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "A0QiKnoZGk4vH5OYoKwqvJFe",
});

// Plan details (for reference only - no DB)
const planDetails = {
  "plan_R1uo385RzbRIKA": { name: "Standard Plan", price: "₹4,850", period: "month" },
  "plan_R1uqJGdXsakTwx": { name: "Premium Plan", price: "₹6,450", period: "month" },
  "plan_R1uqvnksOBtSEH": { name: "Enterprise Plan", price: "₹9,850", period: "month" },
  "plan_R1usIilBLpME0T": { name: "Standard Plan", price: "₹48,500", period: "year" },
  "plan_R1uyUso2JEH0hG": { name: "Premium Plan", price: "₹64,500", period: "year" },
  "plan_R1v1VETXTsHy3p": { name: "Enterprise Plan", price: "₹98,500", period: "year" },
};

// ✅ Create Subscription (with 7-day trial + ₹5 registration fee)
app.post("/create-subscription", async (req, res) => {
  const { customer_email, customer_name, customer_phone, plan_id } = req.body;

  if (!plan_id || !customer_email || !customer_name || !customer_phone) {
    return res.status(400).json({
      error: "Missing required fields (plan_id, customer_email, customer_name, customer_phone)",
    });
  }

  try {
    // Check if customer exists
    const customers = await razorpay.customers.all({ email: customer_email });
    let customer;

    if (customers.items.length > 0) {
      customer = customers.items[0];
    } else {
      // Create new customer
      customer = await razorpay.customers.create({
        name: customer_name,
        email: customer_email,
        contact: customer_phone,
      });
    }

    // Create subscription with 7-day trial and ₹5 registration fee
    const subscription = await razorpay.subscriptions.create({
      plan_id,
      customer_id: customer.id,
      total_count: 12,
      start_at: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60, // 7 days from now
      customer_notify: 1,
      addons: [
        {
          item: {
            name: "Registration Fee",
            amount: 500, // ₹5 in paise
            currency: "INR",
          },
        },
      ],
    });

    return res.status(200).json({
      subscriptionId: subscription.id,
      customerId: customer.id,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Subscription creation failed:", error);
    return res.status(500).json({
      error: "Subscription creation failed",
      message: error.message,
    });
  }
});

// ❌ Removed: /save-business-info (no DB to save to)

// ❌ Removed: /get-all-subscriptions (no DB)

// ✅ Cancel Subscription
app.post("/cancel-subscription", async (req, res) => {
  const { subscription_id } = req.body;

  if (!subscription_id) {
    return res.status(400).json({ message: "subscription_id is required" });
  }

  try {
    const cancelResponse = await razorpay.subscriptions.cancel(subscription_id);

    return res.status(200).json({
      success: true,
      message: "Subscription cancelled successfully",
      cancelled: cancelResponse,
    });
  } catch (error) {
    console.error("Cancel Subscription Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to cancel subscription",
      error: error.message,
    });
  }
});

// ✅ Webhook (for future use - logs only)
app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const signature = req.headers["x-razorpay-signature"];
  console.log("Webhook received:", req.body.toString());
  // ⚠️ In production: verify signature
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});