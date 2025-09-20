const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white py-12 px-6 lg:px-12  backdrop-blur-sm ">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 text-white/70">
        {/* Resources */}

        <div>
          <h3 className="tex-lg font-semibold mb-4 tex-white">
            Resources
          </h3>
        </div>

        {/* Platform */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tex-white">Platform</h3>
        </div>

      </div>
    </footer>

  );
};

export default Footer;