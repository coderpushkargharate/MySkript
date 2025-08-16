import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#fdfcf9] text-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
        
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img 
              src="./assets/img/Myskript Logos.png" 
              alt="myskript logo" 
              width={100} 
              height={100} 
              className="object-contain"
            />
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            Myskript Infotech <br />
            Streamline workflows and grow your business with effective lead management.
          </p>
          <p className="font-medium text-sm text-black">connect@myskript.io</p>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link className="hover:text-gray-900 transition-colors" to="#">CRM</Link></li>
            <li><Link className="hover:text-gray-900 transition-colors" to="#">Automations</Link></li>
            <li><Link className="hover:text-gray-900 transition-colors" to="#">Funnels</Link></li>
            <li><Link className="hover:text-gray-900 transition-colors" to="#">Webinars</Link></li>
            <li><Link className="hover:text-gray-900 transition-colors" to="#">&amp; Many More</Link></li>
            <li><Link className="hover:text-gray-900 transition-colors" to="#">Get A Trial</Link></li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Pages</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link className="hover:text-gray-900 transition-colors" to="#">Features</Link></li>
            <li><Link className="hover:text-gray-900 transition-colors" to="#">Benefits</Link></li>
            <li><Link className="hover:text-gray-900 transition-colors" to="#">Pricing</Link></li>
            <li><Link className="hover:text-gray-900 transition-colors" to="#">Clients</Link></li>
            <li><Link className="hover:text-gray-900 transition-colors" to="#">Integrations</Link></li>
            <li><Link className="hover:text-gray-900 transition-colors" to="#">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social & Login */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900 mb-4">Social</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link className="hover:text-gray-900 transition-colors" to="#">Instagram</Link></li>
            <li><Link className="hover:text-gray-900 transition-colors" to="#">LinkedIn</Link></li>
            <li><Link className="hover:text-gray-900 transition-colors" to="#">Facebook</Link></li>
          </ul>
          <Link 
            to="/login"
            className="inline-block mt-4 px-5 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
          >
            Dashboard Login
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 pt-6 pb-8 text-sm text-gray-500 text-center">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center max-w-7xl mx-auto px-4 gap-2">
          <p className="hover:text-gray-900 cursor-pointer transition-colors">Terms & Conditions</p>
          <p>&copy; 2025 Myskript Infotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
