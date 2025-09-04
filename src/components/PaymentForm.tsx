import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Check, Shield, ArrowLeft } from 'lucide-react';

const planDetails = {
  "plan_R1uo385RzbRIKA": { name: "Standard Plan", price: "₹4,850", period: "month" },
  "plan_R1uqJGdXsakTwx": { name: "Premium Plan", price: "₹6,450", period: "month" },
  "plan_R1uqvnksOBtSEH": { name: "Enterprise Plan", price: "₹9,850", period: "month" },
  "plan_R1usIilBLpME0T": { name: "Standard Plan", price: "₹48,500", period: "year" },
  "plan_R1uyUso2JEH0hG": { name: "Premium Plan", price: "₹64,500", period: "year" },
  "plan_R1v1VETXTsHy3p": { name: "Enterprise Plan", price: "₹98,500", period: "year" }
};

export default function PaymentForm() {
  const { planId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // ✅ Payment Handler
  const handlePayment = async (withTrial) => {
    const { firstName, lastName, email, phone } = formData;
    if (!firstName || !lastName || !email || !phone) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/create-subscription`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_email: email,
          customer_name: `${firstName} ${lastName}`,
          customer_phone: phone,
          plan_id: planId,
          withTrial
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Payment setup failed");

      localStorage.setItem('authToken', data.token);

      const options = {
        key: data.key,
        subscription_id: data.subscriptionId,
        name: 'BusinessPro',
        description: withTrial
          ? '7-Day Free Trial + ₹5 Registration Fee'
          : 'Direct Subscription',
        handler: function () {
          localStorage.setItem('paymentSuccess', 'true');
          localStorage.setItem('customerData', JSON.stringify({
            firstName,
            lastName,
            email,
            phone
          }));
          alert("Payment successful! Redirecting...");
          navigate('/business-form');
        },
        prefill: {
          name: `${firstName} ${lastName}`,
          email: email,
          contact: phone
        },
        theme: { color: '#8B5CF6' },
        modal: {
          ondismiss: () => setLoading(false)
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert(error.message || 'Payment failed. Try again.');
      setLoading(false);
    }
  };

  const plan = planDetails[planId];
  if (!plan) return <div className="min-h-screen flex items-center justify-center">Plan not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Plans
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ✅ Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Check className="w-6 h-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-900">{plan.name}</span>
                <span className="text-lg font-bold text-gray-900">{plan.price}/{plan.period}</span>
              </div>
              <div className="flex justify-between items-center text-green-600">
                <span>7-Day Free Trial Option</span>
                <span className="font-semibold">₹0.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Registration Fee (for trial)</span>
                <span className="font-semibold">₹5.00</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total due today</span>
                  <span>₹5.00 (if trial) / {plan.price} (if direct)</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  After trial: {plan.price} (auto-renewal)
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-blue-900 mb-3">What happens next?</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Choose trial OR direct subscription</li>
                <li>• Trial: ₹5 now, {plan.price} after 7 days</li>
                <li>• Direct: Pay {plan.price} now, renew {plan.period}ly</li>
                <li>• Cancel anytime during trial</li>
                <li>• Full access to all features</li>
              </ul>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                <span>Secured by Razorpay</span>
              </div>
              <span>SSL Encrypted</span>
            </div>
          </div>

          {/* ✅ Payment Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Details</h2>
            <p className="text-gray-600 mb-8">Enter your details to continue</p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* ✅ Two buttons */}
              <button
                type="button"
                onClick={() => handlePayment(true)}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'Pay ₹5 & Start Free Trial'}
              </button>

              <button
                type="button"
                onClick={() => handlePayment(false)}
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : `Direct Subscribe Now (${plan.price})`}
              </button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                By confirming your subscription, you allow automatic recurring payments.  
                You can always cancel your subscription.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
