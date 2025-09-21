import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (

    <section className="flex flex-col items-center mt-10 lg:mt-24 px-4">

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-center tracking-wide text-foreground">

        Elevatr build tools
        <span className="text-gradient"> for innovators</span>
      </h1>

      {/* Subtext */}
      <p className="mt-8 text-lg text-center text-muted max-w-3xl">

        Empower your creativity and bring your next-gen ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      {/* Buttons */}
      <div className="flex justify-center mt-10 space-x-6">

        <a
          href="#"
          className="py-3 px-6 rounded-xl bg-gradient-accent text-foreground 
            shadow-lg shadow-black/40 hover:opacity-90 transition"
        >
          Start for free
        </a>
        {/* Secondary CTA (Glass) */}
        <a
          href="#"
          className="py-3 px-6 rounded-xl glass text-foreground/90 
            hover:text-foreground hover:border-white/30 transition"
        >
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </section>
  );
};
export default HeroSection;