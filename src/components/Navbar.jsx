import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav
      className="sticky top-0 z-50 py-3 px-4 
      bg-black/70 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo + Brand → now scrolls to hero */}
          <motion.a
            href="#hero"
            className="flex items-center flex-shrink-0 ml-6 cursor-pointer"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={logo} alt="Elevatr Logo" className="h-8 w-8 mr-3" />
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Elevatr
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <motion.ul
            className="hidden lg:flex ml-14 space-x-12"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className="relative group cursor-pointer"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
              >
                <a href={item.href} className="hover:text-foreground transition">
                  {item.label}
                </a>
                {/* Blue underline bar on hover */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full" />
              </motion.li>
            ))}
          </motion.ul>

          {/* Desktop Buttons */}
          <motion.div
            className="hidden lg:flex justify-center space-x-6 items-center"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            {/* Sign In → original */}
            <a
              href="#"
              className="py-2 px-4 border border-white/20 
                hover:text-foreground hover:border-white/40 
                transition"
            >
              Sign In
            </a>

            {/* Create Account → upgraded hover */}
            <a
              href="#"
              className="py-2 px-4 rounded-md bg-gradient-accent 
                text-foreground shadow-md shadow-black/30 
                hover:scale-105 hover:shadow-[0_0_15px_rgba(28,156,240,0.8)] 
                hover:opacity-95 transition-all duration-200 ease-out"
            >
              Create an account
            </a>
          </motion.div>

          {/* Mobile Toggle */}
          <motion.div
            className="lg:hidden md:flex flex-col justify-end"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <button
              onClick={toggleNavbar}
              className="text-foreground hover:text-accent-foreground transition"
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md 
            flex flex-col justify-center items-center lg:hidden"
          >
            <ul className="space-y-6 text-xl text-foreground">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-accent-foreground transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-8">
              {/* Sign In original */}
              <a
                href="#"
                className="py-2 px-4 border border-white/20 
                  text-muted hover:text-foreground hover:border-white/40 transition"
              >
                Sign In
              </a>
              {/* Create Account upgraded */}
              <a
                href="#"
                className="py-2 px-4 rounded-md bg-gradient-accent 
                  text-foreground shadow-md shadow-black/30 
                  hover:scale-105 hover:shadow-[0_0_15px_rgba(28,156,240,0.8)] 
                  hover:opacity-95 transition-all duration-200 ease-out"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
