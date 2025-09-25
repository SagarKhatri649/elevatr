import { features } from "../constants";

const FeatureSection = () => {
  return (
    <section
      id="features"
      className="relative mt-24 border-b border-white/5 min-h-[600px] px-6 lg:px-12"
    >
      {/* Section Header */}
      <div className="text-center">
        <span className="glass text-accent-foreground text-sm font-medium px-3 py-1 uppercase tracking-wider">
          Solutions
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-foreground">
          Easily <span className="text-muted">build</span>{" "}
          <span className="text-gradient">your ideas</span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex items-start px-6">
              {/* Icon Circle */}
              <div className="flex h-12 w-12 p-3 rounded-full glass text-accent-foreground justify-center items-center mr-4">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div>
                <h5 className="mt-1 mb-3 text-xl font-semibold text-foreground">
                  {feature.text}
                </h5>
                <p className="text-md text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
