import { CheckCircle2, Shield, Rocket } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <section id="pricing" className="mt-24 px-6 lg:px-12">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-12 tracking-wide text-foreground">
        Pricing
      </h2>

      {/* Pricing Grid */}
      <div className="flex flex-wrap justify-center gap-y-12">
        {pricingOptions.map((option, index) => {
          // pick icon per plan
          let Icon;
          if (option.title === "Free") Icon = CheckCircle2;
          else if (option.title === "Pro") Icon = Shield;
          else if (option.title === "Enterprise") Icon = Rocket;

          return (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div
                className="glass p-10 h-full flex flex-col justify-between 
                border border-white/10 hover:shadow-lg hover:shadow-black/40 transition"
              >
                {/* Plan Title */}
                <p className="text-4xl font-semibold mb-6 text-foreground">
                  {option.title}
                  {option.title === "Pro" && (
                    <span className="ml-2 text-xl bg-gradient-accent bg-clip-text text-transparent">
                      (Most Popular)
                    </span>
                  )}
                </p>

                {/* Price */}
                <p className="mb-8">
                  <span className="text-5xl font-bold mr-2 text-foreground">
                    {option.price}
                  </span>
                  <span className="text-muted tracking-tight">/Month</span>
                </p>

                {/* Features */}
                <ul className="flex-1">
                  {option.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="mt-6 flex items-center text-foreground/90"
                    >
                      <Icon className="text-accent-foreground" size={20} />
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Subscribe Button */}
                <a
                  href="#"
                  className="inline-flex justify-center items-center text-center w-full h-12 mt-12 
                  bg-gradient-accent text-foreground font-medium rounded-md shadow-md hover:opacity-90 transition"
                >
                  Subscribe
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;


