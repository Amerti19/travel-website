import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-white to-yellow-50 p-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6">
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Travel, <span className="text-indigo-600 underline">enjoy</span><br />
            and live a new and full life
          </motion.h1>
          <p className="text-gray-600">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening park gate sell they west for hard...</p>
          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-yellow-500 transition">
              Find out more
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              ▶️ Play Demo
            </button>
          </div>
        </div>

        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src="/images/hero-girl.jpg" alt="Traveler" />
        </motion.div>
      </div>
    </section>
  );
}
