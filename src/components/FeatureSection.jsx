const FeatureSection = () => {

  return (
    <section
      id="features"
      className="relative mt-24 border-b border-white/10 min-h-[800px] px-6 lg:px-12">

      {/* Section Header */}
      <div className="text-center">
        <span className="bg-white/5 text-orange-500 rounded-full text-sm font-medium px-3 py-1 uppercase tracking-wider backdrop-blur-md border border-white/10">
          Features
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-white">

          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
            your ideas
          </span>
        </h2>
      </div>

      {/* Features Grid */}
      <div>
        {/* Icon Circle */}
        {/* Text Content */}
        <div className="ml-4">
          <h5 className="mt-1 mb-3 text-xl font-semibold text-white">
            feature text
          </h5>
          <p className="text-md text-white/70 leading-relaxed">
            feature description
          </p>
        </div>

      </div>
    </section>


  );
}

export default FeatureSection;