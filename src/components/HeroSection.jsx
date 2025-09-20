
const HeroSection = () => {
  return (

    <section className="flex flex-col items-center mt-10 lg:mt-24 px-4">
      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-center tracking-wide text-white">
        Elevatr build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
          {" "}
          for innovators
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-8 text-lg text-center text-white/70 max-w-3xl">
        Empower your creativity and bring your next-gen ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      {/* Buttons */}
      <div className="flex justify-center mt-10 space-x-6">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-700 py-3 px-6 rounded-xl 
            text-white shadow-lg shadow-orange-900/30 hover:opacity-90 transition"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-6 rounded-xl border border-white/20 text-white/80 
            hover:border-white/40 hover:text-white transition backdrop-blur-md"
        >
          Documentation
        </a>
      </div>

    </section>
  );
};
export default HeroSection;