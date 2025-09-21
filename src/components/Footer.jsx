import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer
      className="mt-24 border-t border-white/10 py-12 px-6 lg:px-12 
      bg-black/60 backdrop-blur-md"
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 text-muted">
        {/* Resources */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-foreground">
            Learn
          </h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-accent-foreground transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-foreground">
            Build with Elevatr
          </h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-accent-foreground transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-foreground">
            Network
          </h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-accent-foreground transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-muted">
        <p>
          © {new Date().getFullYear()} <span className="text-foreground">Elevatr</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
