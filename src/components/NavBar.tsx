import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_sideways.png";
import { Menu, X } from "lucide-react"; // using lucide icons (install with: npm i lucide-react)

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-lg bg-white backdrop-blur-md transition-shadow duration-300 relative z-50">
      <Link to="/">
        <img className="w-[150px] drop-shadow-md" src={logo} alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium mr-[50px]">
        {["Home", "Products", "About Us", "Contact Us"].map((item, index) => (
          <Link
            key={index}
            to={
              item === "Home"
                ? "/"
                : item === "About Us"
                ? "/aboutus"
                : item === "Products"
                ? "/products"
                : item === "Contact Us"
                ? "/contactus"
                : ""
            }
            className="font-Open Sans text-[15px] relative text-gray-800 hover:text-[#125fed] transition duration-200 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#125fed] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:cursor-pointer"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4 text-sm font-medium md:hidden ">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="font-Open Sans text-gray-800 hover:text-[#125fed]"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="font-Open Sans text-gray-800 hover:text-[#125fed]"
          >
            Products
          </Link>
          <Link
            to="/aboutus"
            onClick={() => setIsOpen(false)}
            className="font-Open Sans text-gray-800 hover:text-[#125fed]"
          >
            About Us
          </Link>
          <Link
            to="/contactus"
            onClick={() => setIsOpen(false)}
            className="font-Open Sans text-gray-800 hover:text-[#125fed]"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};
