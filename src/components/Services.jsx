import { motion } from "framer-motion";

const services = [
  {
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: "🌦️",
  },
  {
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: "✈️",
  },
  {
    title: "Local Events",
    description: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    icon: "🎤",
  },
  {
    title: "Customization",
    description: "We deliver customized aviation services for military customers.",
    icon: "⚙️",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-white text-center">
      <h4 className="text-sm text-gray-500 tracking-wide uppercase mb-2">Category</h4>
      <h2 className="text-3xl font-bold mb-12 text-gray-800">We Offer Best Services</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
         <motion.div
             key={index}
             className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition duration-300"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.4, delay: index * 0.2 }}
>

            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-orange-100 text-orange-500 text-2xl rounded-full mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-500 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
