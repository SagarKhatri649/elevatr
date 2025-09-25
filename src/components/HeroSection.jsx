import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

const IMAGES = [image1, image2, image3];
const INTERVAL = 5000;

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextImage, INTERVAL);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <section id="hero" className="mt-16 lg:mt-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* ===== Left: Text block with motion ===== */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Elevatr build tools{" "}
            <span className="text-muted">for</span>{" "}
            <span className="text-gradient">innovators</span>
          </h1>

          <p className="mt-6 text-lg text-muted max-w-xl mx-auto lg:mx-0">
            Empower your creativity and bring your next-gen ideas to life with
            our intuitive development tools.
          </p>


          {/* CTA Buttons */}
          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            {/* Start for free → interactive */}
            <a
              href="#"
              className="py-3 px-6 rounded-md bg-gradient-accent text-foreground 
                shadow-lg shadow-black/40 
                hover:scale-105 hover:shadow-[0_0_15px_rgba(28,156,240,0.8)] 
                hover:opacity-95 transition-all duration-200 ease-out"
            >
              Start for free
            </a>

            {/* Documentation → original subtle */}
            <a
              href="#"
              className="py-3 px-6 rounded-md border border-white/20 text-foreground/90 
                hover:text-foreground hover:border-white/40 transition"
            >
              Documentation
            </a>
          </div>
        </motion.div>

        {/* ===== Right: Rotating images ===== */}
        <div className="flex-[1.3] relative w-full h-[360px] sm:h-[420px] lg:h-[500px]">
          {IMAGES.map((src, index) => (
            <BackgroundImage
              key={index}
              src={src}
              isActive={index === currentImage}
            />
          ))}

          {/* navigation dots */}
          <NavigationDots
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

/* === Helpers === */
const BackgroundImage = ({ src, isActive }) => (
  <motion.div
    className="absolute inset-0 bg-cover bg-center rounded-xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: isActive ? 1 : 0 }}
    transition={{ duration: 1 }}
    style={{ backgroundImage: `url(${src})` }}
    aria-hidden="true"
  />
);

const NavigationDots = ({ currentImage, setCurrentImage }) => (
  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
    {IMAGES.map((_, index) => (
      <motion.button
        key={index}
        onClick={() => setCurrentImage(index)}
        aria-label={`Switch to image ${index + 1}`}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === index ? "bg-sky-900 w-4" : "bg-black"
          }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      />
    ))}
  </div>
);
