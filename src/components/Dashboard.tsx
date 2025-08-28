import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, CreditCard, TrendingUp, DollarSign, LogOut, Calendar, Eye, X } from 'lucide-react';

interface BusinessInfo {
  fullName: string;
  businessName: string;
  businessEmail: string;
  businessPhone: string;
  businessAddress: string;
  businessIndustry: string;
  businessDescription: string;
}

interface Subscription {
  _id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  planName: string;
  planPrice: string; // e.g. "₹4,850"
  status: string;    // "active" | "cancelled" | ...
  subscriptionId: string;
  createdAt: string;
  businessInfo?: BusinessInfo | null;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      fetchSubscriptions();
    }
  }, [navigate]);

  const fetchSubscriptions = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/get-all-subscriptions`);
      const data = await response.json();
      setSubscriptions(data.subscriptions || []);
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'created': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const parseINR = (val: string) => {
    // Remove anything that's not digit or dot
    const num = Number((val || '0').replace(/[^\d.]/g, ''));
    return isNaN(num) ? 0 : num;
  };

  const totalRevenue = subscriptions.reduce((sum, sub) => {
    const price = parseINR(sub.planPrice);
    return sum + (sub.status === 'active' ? price : 0);
  }, 0);

  const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active').length;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-28">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg"></div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, Pushkar</span>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Subscriptions</p>
                <p className="text-2xl font-bold text-gray-900">{subscriptions.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Subscriptions</p>
                <p className="text-2xl font-bold text-gray-900">{activeSubscriptions}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <CreditCard className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {subscriptions.length > 0 ? ((activeSubscriptions / subscriptions.length) * 100).toFixed(1) : 0}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscriptions Table */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">All Subscriptions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subscriptions.map((sub) => (
                  <tr key={sub._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{sub.customerName}</div>
                        <div className="text-sm text-gray-500">{sub.customerEmail}</div>
                        <div className="text-sm text-gray-500">{sub.customerPhone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{sub.planName}</div>
                      <div className="text-sm text-gray-500">{sub.planPrice}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(sub.status)}`}>
                        {sub.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(sub.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedSubscription(sub)}
                        className="text-purple-600 hover:text-purple-900 flex items-center"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
                {subscriptions.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-6 text-center text-gray-500">No subscriptions found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedSubscription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">Subscription Details</h3>
              <button
                onClick={() => setSelectedSubscription(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Customer Information</h4>
                  <p><strong>Name:</strong> {selectedSubscription.customerName}</p>
                  <p><strong>Email:</strong> {selectedSubscription.customerEmail}</p>
                  <p><strong>Phone:</strong> {selectedSubscription.customerPhone}</p>
                  <p><strong>Plan:</strong> {selectedSubscription.planName}</p>
                  <p><strong>Price:</strong> {selectedSubscription.planPrice}</p>
                  <p><strong>Status:</strong> {selectedSubscription.status}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Information</h4>
                  {selectedSubscription.businessInfo ? (
                    <>
                      <p><strong>Full Name:</strong> {selectedSubscription.businessInfo.fullName}</p>
                      <p><strong>Business Name:</strong> {selectedSubscription.businessInfo.businessName}</p>
                      <p><strong>Industry:</strong> {selectedSubscription.businessInfo.businessIndustry}</p>
                      <p><strong>Email:</strong> {selectedSubscription.businessInfo.businessEmail}</p>
                      <p><strong>Phone:</strong> {selectedSubscription.businessInfo.businessPhone}</p>
                      <p><strong>Address:</strong> {selectedSubscription.businessInfo.businessAddress}</p>
                    </>
                  ) : (
                    <p className="text-gray-500">No business information provided yet.</p>
                  )}
                </div>
              </div>

              {selectedSubscription.businessInfo && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Description</h4>
                  <p className="text-gray-700">{selectedSubscription.businessInfo.businessDescription}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
