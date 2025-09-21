// src/components/Navbar.jsx
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
          {/* Logo + Brand */}
          <div className="flex items-center flex-shrink-0 ml-6">
            <img
              src={logo}
              alt="Elevatr Logo"
              className="h-8 w-8 mr-3"
            />
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Elevatr
            </span>
          </div>


          {/* Desktop Nav */}
          <ul className="hidden lg:flex ml-14 space-x-12  ">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-foreground transition">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a
              href="#"
              className="py-2 px-4 border border-white/20 
                  hover:text-foreground hover:border-white/40 
                transition"
            >
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-4 bg-gradient-accent 
                text-foreground shadow-md shadow-black/30 hover:opacity-90 
                transition"
            >
              Create an account
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button
              onClick={toggleNavbar}
              className="text-foreground hover:text-accent-foreground transition"
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
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
              <a
                href="#"
                className="py-2 px-4 border border-white/20 
                  text-muted hover:text-foreground hover:border-white/40 transition"
              >
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-gradient-accent 
                  text-foreground shadow-md shadow-black/30 hover:opacity-90 
                  transition"
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
