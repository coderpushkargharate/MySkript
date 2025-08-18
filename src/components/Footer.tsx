

export default function Footer() {
  return (
    <footer className="bg-[#fdfdfb] px-8 md:px-40 pt-12 pb-6">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side */}
        <div className="max-w-sm">
          <div className="mb-4">
            <img src="/assets/img/Myskript Logos.png" alt="Myskript Logo" width={150} height={40} />
          </div>
          <h3 className="text-[20px]  mb-2">Myskript Infotech</h3>
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
              <li><a href="#">CRM</a></li>
              <li><a href="#">Automations</a></li>
              <li><a href="#">Funnels</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="#">And Many More</a></li>
              <li><a href="#">Get A Trial</a></li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-[16px] font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-lg text-gray-600">
              <li><a href="#">Features</a></li>
              <li><a href="#">Benefits</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Clients</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[16px] font-semibold mb-4">Social</h4>
            <ul className="space-y-2 text-lg text-gray-600">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <a href="#" className="mb-2 md:mb-0">Terms & Conditions</a>
        <p>©2025 Copyright Myskript Infotech. All rights reserved.</p>
      </div>
    </footer>
  );
}
