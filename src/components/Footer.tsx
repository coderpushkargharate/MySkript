import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#fdfdfb] px-8 md:px-40 pt-12 pb-6">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Side */}
        <div className="max-w-sm">
          <div className="mb-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/assets/img/Myskript Logos.png"
                alt="myskript logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <h3 className="text-[20px] mb-2">Myskript Infotech LLP</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Streamline workflows and grow your business<br />
            with effective lead management.
          </p>
          <a
            href="mailto:connect@myskript.io"
            className="mt-4 text-lg block font-semibold text-black"
          >
            connect@myskript.io
          </a>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row gap-20">
          
          {/* Features */}
          <div>
            <h4 className="text-[16px] font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-lg text-gray-600">
              <li><Link to="/features">CRM</Link></li>
              <li><Link to="/automations">Automations</Link></li>
              <li><Link to="/funnels">Funnels</Link></li>
              <li><Link to="/webinars">Webinars</Link></li>
              <li><Link to="/more">And Many More</Link></li>
              <li><Link to="/trial">Get A Trial</Link></li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-[16px] font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-lg text-gray-600">
              <li><a href="#features">Features</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#integrations">Integrations</a></li>
              <li><Link to="/terms">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[16px] font-semibold mb-4">Social</h4>
            <ul className="space-y-2 text-lg text-gray-600">
              <li>
                <a 
                  href="https://www.instagram.com/myskript.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/people/Myskriptio/61578113819764/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <Link to="/terms" className="mb-2 md:mb-0">Terms & Conditions</Link>
        <p>©2025 Copyright Myskript Infotech. All rights reserved.</p>
      </div>
    </footer>
  );
}
