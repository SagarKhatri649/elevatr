import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import { motion } from "framer-motion";
import workflowVideo from "../assets/workflowVideo.mp4"; // ✅ place your video in assets
const Workflow = () => {
  return (
    <section id="workflow" className="mt-24 px-6 lg:px-12">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide text-foreground">
        <span className="text-muted">Accelerate</span> your{" "}
        <span className="text-gradient">workflow.</span>
      </h2>

      {/* Content → Grid Layout */}
      <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ===== Left: Video Side ===== */}
        <motion.div
          className="flex justify-center"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="rounded-xl overflow-hidden w-full max-w-xl shadow-[0_8px_32px_rgba(28,156,240,0.25)] border border-white/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover"
            >
              <source src={workflowVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* ===== Right: Checklist Side ===== */}
        <div className="w-full">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex mb-10 items-start"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center h-12 w-12 rounded-full glass text-accent-foreground mr-6 hover:shadow-[0_0_12px_rgba(28,156,240,0.6)] transition">
                <CheckCircle2 size={22} />
              </div>

              {/* Text */}
              <div>
                <h5 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h5>
                <p className="text-md text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;