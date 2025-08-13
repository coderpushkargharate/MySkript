import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Gift } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Your business information has been successfully submitted and your free trial is now active!
          </p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Your Free Trial is Active!</h2>
            </div>
            <div className="space-y-2 text-gray-700">
              <p>✅ Full access to all premium features for 7 days</p>
              <p>✅ No charges during the trial period</p>
              <p>✅ Cancel anytime before the trial ends</p>
              <p>✅ Automatic billing starts only after trial completion</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">What's Next?</h3>
            <div className="text-left space-y-3 max-w-md mx-auto">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-xs font-bold text-blue-600">1</span>
                </div>
                <div>
                  <p className="text-gray-700">Check your email for login credentials and setup instructions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-xs font-bold text-blue-600">2</span>
                </div>
                <div>
                  <p className="text-gray-700">Explore all features and customize your business profile</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-xs font-bold text-blue-600">3</span>
                </div>
                <div>
                  <p className="text-gray-700">Our support team will reach out to help you get started</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            >
              Back to Home
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <div className="text-sm text-gray-500">
              <p>Need help? Contact our support team at support@businesspro.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}