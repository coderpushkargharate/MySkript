
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#fdfcf9] text-gray-800 pt-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.svg" alt="myskript logo" width={40} height={40} />
            <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
              myskript
            </span>
          </div>
          <p className="mb-4">
            Myskript Infotech
            <br />
            Streamline workflows and grow your business with effective lead management.
          </p>
          <p className="font-medium text-sm text-black">connect@myskript.io</p>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="#">CRM</Link></li>
            <li><Link to="#">Automations</Link></li>
            <li><Link to="#">Funnels</Link></li>
            <li><Link to="#">Webinars</Link></li>
            <li><Link to="#">&amp; Many More</Link></li>
            <li><Link to="#">Get A Trial</Link></li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-3">Pages</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="#">Features</Link></li>
            <li><Link to="#">Benefits</Link></li>
            <li><Link to="#">Pricing</Link></li>
            <li><Link to="#">Clients</Link></li>
            <li><Link to="#">Integrations</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Social</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="#">Instagram</Link></li>
            <li><Link to="#">LinkedIn</Link></li>
            <li><Link to="#">Facebook</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 pt-4 pb-8 text-sm text-gray-500 text-center">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto px-4 gap-2">
          <p className="text-xs">Terms & Conditions</p>
          <p className="text-xs">
            &copy;2025 Copyright Myskript Infotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
