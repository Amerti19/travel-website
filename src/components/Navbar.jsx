
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    
    <motion.nav
      className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <span className="text-yellow-500">Jad</span>oo
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li className="hover:text-indigo-600 cursor-pointer">Destinations</li>
        <li className="hover:text-indigo-600 cursor-pointer">Hotels</li>
        <li className="hover:text-indigo-600 cursor-pointer">Flights</li>
        <li className="hover:text-indigo-600 cursor-pointer">Bookings</li>
      </ul>

      {/* Right Side: Login / Sign Up / Language */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-700 hover:text-indigo-600">Login</button>
        <button className="bg-yellow-400 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition">
          Sign up
        </button>
        <select className="text-gray-700 border-none bg-transparent focus:outline-none">
          <option>EN</option>
          <option>FR</option>
          <option>ES</option>
        </select>
      </div>

    </motion.nav>
  );
}
