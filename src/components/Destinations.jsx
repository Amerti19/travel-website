import { motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    city: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
    image: "/images/london.jpg",
  },
  {
    id: 2,
    city: "Rome, Italy",
    price: "$3.5k",
    duration: "10 Days Trip",
    image: "/images/rome.jpg",
    
  },
  {
    id: 3,
    city: "Europe Tour",
    price: "$5.0k",
    duration: "15 Days Trip",
    image: "/images/europe.jpg",
    
  },
];

export default function Destinations() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Top Destinations</h2>
        <p className="text-gray-600 mb-10">Explore the best destinations around the world!</p>

        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((item, i) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              <img src={item.image} alt={item.city} className="w-full h-56 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800">{item.city}</h3>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>{item.price}</span>
                  <span>{item.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
