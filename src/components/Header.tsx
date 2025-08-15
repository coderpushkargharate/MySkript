import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Clients', href: '#clients' },
    { name: 'Integrations', href: '#integrations' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white rounded-full shadow-md px-8 py-3 mx-auto max-w-[68rem] mt-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/img/Myskript Logos.png"
            alt="myskript logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-800 text-[17px] font-normal tracking-wide hover:text-black transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {item.name}
            </a>
          ))}
        </nav>

      {/* CTA Button */}
<div className="hidden md:block">
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
    onMouseOver={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)")
    }
    onMouseOut={(e) =>
      (e.currentTarget.style.background =
       "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)")
    }
  >
    Get 7 Day Free Trial →
  </button>
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
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-800 text-[15px] font-normal tracking-wide hover:text-black"
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="w-full bg-gradient-to-r from-blue-500 to-fuchsia-600 text-white text-sm font-medium py-2 rounded-full">
            Get 7 Day Free Trial →
          </button>
        </div>
      )}
    </header>
  );
}
