import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="mt-24 px-6 lg:px-12">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-12 lg:my-20 text-foreground">
        What People are saying
      </h2>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap justify-center gap-y-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4"
          >
            <div
              className="p-6 text-md font-light text-foreground/80 
              border border-white/10 rounded-xl
              bg-white/5 backdrop-blur-md hover:shadow-lg hover:shadow-black/40 transition"
            >
              {/* Testimonial Text */}
              <p className="leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex mt-8 items-center">
                <img
                  className="w-12 h-12 mr-4 rounded-full border border-white/20"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6 className="text-foreground font-medium">
                    {testimonial.user}
                  </h6>
                  <span className="text-sm italic text-muted">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
