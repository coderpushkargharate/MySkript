import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserDashboard from "./UserDashboard"; // reuse your existing dashboard

export default function AuthDashboard() {
  const [mode, setMode] = useState<"login" | "register" | "dashboard">("login");
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState("");

  const API = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const endpoint = mode === "register" ? "/register" : "/login";
      const res = await fetch(`${API}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        setMode("dashboard");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Network error");
    }
  };

  // Auto login if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setMode("dashboard");
  }, []);

  if (mode === "dashboard") return <UserDashboard />;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {mode === "register" ? "Register" : "Login"}
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            {mode === "register" ? "Register" : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {mode === "register" ? (
            <>
              Already have an account?{" "}
              <button
                className="text-purple-600"
                onClick={() => setMode("login")}
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                className="text-purple-600"
                onClick={() => setMode("register")}
              >
                Register
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
