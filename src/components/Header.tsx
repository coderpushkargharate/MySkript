import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '/#features' },
    { name: 'Benefits', href: '/#benefits' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Clients', href: '/#clients' },
    { name: 'Integrations', href: '/#integrations' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white py-3 px-8 mx-auto max-w-[80rem] mt-4 transition-all duration-300 ${
          isMenuOpen ? 'rounded-none shadow-none' : 'rounded-full shadow-md'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <HashLink smooth to="/#hero" className="flex items-center space-x-2">
            <img
              src="/assets/img/Myskript Logos.png"
              alt="myskript logo"
              className="h-12 w-auto"
            />
          </HashLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 items-center">
            {navItems.map((item) => (
              <HashLink
                key={item.name}
                smooth
                to={item.href}
                className="text-gray-800 text-[17px] font-normal tracking-wide hover:text-black transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.name}
              </HashLink>
            ))}
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <HashLink smooth to="/#pricing">
              <button
                style={{
                  background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  padding: "8px 20px",
                  borderRadius: "15px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                Get 7 Day Free Trial →
              </button>
            </HashLink>

            <Link to="/userdashboard">
              <button
                style={{
                  background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  padding: "8px 20px",
                  borderRadius: "15px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                Manage Subscription →
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-xl shadow-lg py-3 px-4 space-y-2">
            {navItems.map((item) => (
              <HashLink
                key={item.name}
                smooth
                to={item.href}
                className="block text-gray-800 text-[15px] font-normal tracking-wide hover:text-black"
                style={{ fontFamily: 'Inter, sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </HashLink>
            ))}

            {/* Mobile Buttons */}
            <HashLink smooth to="/#pricing">
              <button className="w-full bg-gradient-to-r from-blue-500 to-fuchsia-600 text-white text-sm font-medium py-2 rounded-full">
                Get 7 Day Free Trial →
              </button>
            </HashLink>

            <br /> <br />
            <Link to="/userdashboard">
              <button className="w-full bg-gradient-to-r from-blue-500 to-fuchsia-600 text-white text-sm font-medium py-2 rounded-full">
                Manage Subscription →
              </button>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
