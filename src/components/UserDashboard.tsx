// App.jsx
import React, { useEffect, useState } from "react";

export default function UserDashboard() {
  const [page, setPage] = useState("login"); // "register" | "login" | "dashboard"
  const [form, setForm] = useState({ email: "", phone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(null);

  const apiBase = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      fetchDashboard(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleRegister = async () => {
    if (!form.email || !form.phone || !form.password)
      return alert("Fill all fields");
    setLoading(true);
    try {
      const res = await fetch(`${apiBase}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Register failed");
      alert(data.message || "Registration successful! Please login.");
      setPage("login");
    } catch (err) {
      alert(err.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!form.email || !form.phone || !form.password)
      return alert("Fill all fields");
    setLoading(true);
    try {
      const res = await fetch(`${apiBase}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      localStorage.setItem("authToken", data.token);
      await fetchDashboard(data.token);
      setPage("dashboard");
    } catch (err) {
      alert(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const fetchDashboard = async (providedToken) => {
    setLoading(true);
    try {
      const t = providedToken || localStorage.getItem("authToken");
      if (!t) throw new Error("No auth token");
      const res = await fetch(`${apiBase}/user-dashboard`, {
        headers: { Authorization: `Bearer ${t}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch dashboard");
      setPayload(data);
      setPage("dashboard");
    } catch (err) {
      alert(err.message || "Session expired or error. Please login again.");
      localStorage.removeItem("authToken");
      setPayload(null);
      setPage("login");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async () => {
    if (!payload?.subscription?.id) return alert("No active subscription");
    if (!window.confirm("Cancel subscription?")) return;
    try {
      const res = await fetch(`${apiBase}/cancel-subscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({ subscription_id: payload.subscription.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Cancel failed");
      alert(data.message || "Subscription cancelled");
      fetchDashboard();
    } catch (err) {
      alert(err.message || "Cancel failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setPayload(null);
    setPage("login");
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow">
        {page === "register" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <div className="space-y-4">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>
            <button
              onClick={handleRegister}
              disabled={loading}
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg"
            >
              {loading ? "Registering..." : "Register"}
            </button>
            <p className="mt-3 text-center">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setPage("login")}
              >
                Login
              </span>
            </p>
          </>
        )}

        {page === "login" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <div className="space-y-4">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>
            <button
              onClick={handleLogin}
              disabled={loading}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <p className="mt-3 text-center">
              Don&apos;t have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setPage("register")}
              >
                Register
              </span>
            </p>
          </>
        )}

        {page === "dashboard" && payload && (
          <>
            <h1 className="text-2xl font-bold mb-4">
              Welcome, {payload.user?.name || payload.user?.email}
            </h1>

            <section className="mb-6">
              <h2 className="font-semibold">Account</h2>
              <div className="mt-2 text-sm text-gray-700">
                <div>Email: {payload.user.email}</div>
                <div>Phone: {payload.user.phone}</div>
                <div>Status: {payload.user.status}</div>
                <div>
                  Registered:{" "}
                  {payload.user.createdAt
                    ? new Date(payload.user.createdAt).toLocaleDateString()
                    : "N/A"}
                </div>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="font-semibold">Subscription</h2>
              {payload.subscription ? (
                <div className="mt-2">
                  <div>ID: {payload.subscription.id}</div>
                  <div>Status: {payload.subscription.status}</div>
                  <div>
                    Plan: {payload.plan?.name} — {payload.plan?.price}/
                    {payload.plan?.period}
                  </div>
                  <div>
                    Start:{" "}
                    {payload.subscription.currentStartMs
                      ? new Date(
                          payload.subscription.currentStartMs
                        ).toLocaleString()
                      : "N/A"}
                  </div>
                  <div>
                    End:{" "}
                    {payload.subscription.currentEndMs
                      ? new Date(
                          payload.subscription.currentEndMs
                        ).toLocaleString()
                      : "N/A"}
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                      Cancel subscription
                    </button>
                    <button
                      onClick={() => setPage("register")}
                      className="px-4 py-2 bg-gray-200 rounded"
                    >
                      View Plans
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-2">
                  <div>No active subscription</div>
                  <button
                    onClick={() => setPage("register")}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                  >
                    Create subscription
                  </button>
                </div>
              )}
            </section>

            <section>
              <h2 className="font-semibold mb-2">Business Info</h2>
              {payload.business ? (
                <div className="text-sm text-gray-700">
                  <div>Business name: {payload.business.businessName}</div>
                  <div>Full name: {payload.business.fullName}</div>
                  <div>Email: {payload.business.businessEmail}</div>
                  <div>Phone: {payload.business.businessPhone}</div>
                  <div>Address: {payload.business.businessAddress}</div>
                </div>
              ) : (
                <div>No business info saved.</div>
              )}
            </section>

            <button
              onClick={handleLogout}
              className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
