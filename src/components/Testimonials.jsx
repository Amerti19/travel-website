import { motion } from "framer-motion";

const testimonial = {
  name: "John Doe",
  location: "USA",
  text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
};

export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            What People Say <br /> About Us
          </h2>
          <p className="text-gray-600">
            Here’s what our satisfied travelers have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          className="lg:w-1/2 bg-gray-50 p-6 rounded-2xl shadow-lg space-y-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 italic"> {testimonial.text} </p>
          <div className="flex items-center mt-4 space-x-4">
            <img
              src={testimonial.avatar}
              alt="User"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.location}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
