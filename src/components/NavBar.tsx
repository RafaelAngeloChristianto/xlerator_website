import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_sideways.png";
import { Menu, X } from "lucide-react";

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About Us", path: "/aboutus" },
    { label: "Contact Us", path: "/contactus" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white shadow-md"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative z-50 transform hover:scale-105 transition-transform duration-300"
          >
            <img
              className="w-[140px] md:w-[160px] drop-shadow-lg"
              src={logo}
              alt="Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 lg:px-5 py-2 text-[15px] font-semibold rounded-full transition-all duration-300 group ${isActive(item.path)
                    ? "text-[#383c8c] bg-[#383c8c]/10"
                    : "text-gray-700 hover:text-[#383c8c] hover:bg-gray-50"
                  }`}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Active indicator */}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#383c8c] rounded-full" />
                )}
                {/* Hover effect */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#383c8c]/0 via-[#383c8c]/5 to-[#383c8c]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${isOpen
                    ? "opacity-0 rotate-90 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                  }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${isOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-0"
                  }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-40 md:hidden transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          {/* Mobile Navigation Links */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
                className={`block px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 transform ${isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                  } ${isActive(item.path)
                    ? "bg-gradient-to-r from-[#383c8c] to-[#4a4fb8] text-white shadow-lg scale-105"
                    : "text-gray-700 hover:bg-gray-100 hover:translate-x-1"
                  }`}
              >
                <span className="flex items-center justify-between">
                  {item.label}
                  {isActive(item.path) && (
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  )}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div
            className={`mt-auto pt-6 border-t border-gray-200 transition-all duration-500 ${isOpen ? "translate-y-0 opacity-100 delay-300" : "translate-y-4 opacity-0"
              }`}
          >
            <p className="text-sm text-gray-500 text-center mb-4">
              Need assistance?
            </p>
            <Link
              to="/contactus"
              onClick={() => setIsOpen(false)}
              className="block w-full px-5 py-3 bg-gradient-to-r from-[#383c8c] to-[#4a4fb8] text-white text-center font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
