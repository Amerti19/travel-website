import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-white to-yellow-50 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Travel, <span className="text-indigo-600 underline">enjoy</span><br />
            and <span className="text-orange-500">live</span> a new and full life
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Discover your dream destinations and make memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-full transition">
              Find out more
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-full transition">
              ▶️ Play Demo
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/images/hero-girl.jpg"
            alt="Travel Girl"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
