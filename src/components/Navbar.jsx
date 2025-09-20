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
    <nav className="sticky top-0 z-50 py-3 
      backdrop-blur-lg bg-black/40 border-b border-white/10">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo + Brand */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl font-semibold tracking-tight text-white">
              Elevatr
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex ml-14 space-x-12 text-white/80">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-white transition">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a
              href="#"
              className="py-2 px-4 rounded-xl border border-white/20 
                text-white/80 hover:text-white hover:border-white/40 
                transition"
            >
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-4 rounded-xl 
                bg-gradient-to-r from-orange-500 to-orange-700 
                text-white shadow-lg shadow-orange-900/30 hover:opacity-90 
                transition"
            >
              Create an account
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-orange-400 transition"
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl 
            flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-6 text-xl text-white">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-orange-400 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-8">
              <a
                href="#"
                className="py-2 px-4 rounded-xl border border-white/20 
                  text-white/80 hover:text-white hover:border-white/40 transition"
              >
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-4 rounded-xl 
                  bg-gradient-to-r from-orange-500 to-orange-700 
                  text-white shadow-lg shadow-orange-900/30 hover:opacity-90 transition"
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
