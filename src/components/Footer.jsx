
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 font-sans">
      {/* Newsletter */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative">
        <div className="bg-[#f4f5f9] rounded-2xl p-8 md:p-12 text-center shadow-md">
          <h2 className="text-lg md:text-xl font-semibold mb-6">
            Subscribe to get information, latest news and other <br />
            interesting offers about Jadoo
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-72 px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-md font-semibold">
              Subscribe
            </button>
          </div>
          {/* Paper plane icon */}
          <div className="absolute -top-6 right-6 w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xl">📨</span>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-gray-600">
        {/* Logo + Description */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Jadoo.</h3>
          <p>Book your trip in minutes, get full control for much longer.</p>
        </div>

        {/* Footer Columns */}
        <div>
          <h4 className="text-gray-800 font-semibold mb-3">Company</h4>
          <ul className="space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-800 font-semibold mb-3">Contact</h4>
          <ul className="space-y-1">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-800 font-semibold mb-3">More</h4>
          <ul className="space-y-1">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 py-6 border-t text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>All rights reserved @jadoo.co</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="text-lg"></span>
          <span className="text-lg"></span>
          <span className="text-lg"></span>
          <div className="flex items-center gap-4 mt-4 md:mt-0 text-gray-600">
  <a href="#" className="hover:text-blue-500">
    <FaFacebookF size={20} />
  </a>
  <a href="#" className="hover:text-sky-500">
    <FaTwitter size={20} />
  </a>
  <a href="#" className="hover:text-pink-500">
    <FaInstagram size={20} />
  </a>
</div>

        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Google_Play_2022_icon.svg"
            alt="Play Store"
            className="h-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="App Store"
            className="h-6"
          />
        </div>
      </div>
   

...


    </footer>
  );
};

export default Footer;
