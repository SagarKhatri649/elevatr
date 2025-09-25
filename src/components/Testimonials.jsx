import { testimonials } from "../constants";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      className="mt-24 px-6 lg:px-12"
      initial={{ y: -60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-12 text-foreground">
        What People are saying
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }} // start slightly below + hidden
            whileInView={{ y: 0, opacity: 1 }} // animate into place
            whileHover={{ scale: 1.05 }} // keep hover effect
            viewport={{ once: false, amount: 0.3 }}
            className="glass-testimonial p-6"
          >
            <p className="text-base leading-relaxed text-foreground/90 mb-4">
              “{testimonial.text}”
            </p>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full border border-white/20 mr-3"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div>
                <h6 className="text-base font-semibold text-foreground">
                  {testimonial.user}
                </h6>
                <span className="text-sm text-muted">{testimonial.company}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
