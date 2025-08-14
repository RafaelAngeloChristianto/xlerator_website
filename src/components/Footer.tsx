import React from "react";
import { SiInstagram } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Tagline */}
        <div>
          <h1 className="text-2xl font-bold text-[#A1C08F]">Xlerator</h1>
          <p className="mt-2 text-sm text-gray-400">
            Empowering Progress. Accelerating Potential.
          </p>
        </div>

        {/* Navigation + Product Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <Link to="/">
              <li>
                <a href="#" className="hover:text-[#A1C08F]">
                  Home
                </a>
              </li>
            </Link>
            <Link to="/products">
              <li>
                <a href="#" className="hover:text-[#A1C08F]">
                  Products
                </a>
              </li>
            </Link>
            <Link to="/aboutus">
              <li>
                <a href="#" className="hover:text-[#A1C08F]">
                  About Us
                </a>
              </li>
            </Link>
            <Link to="/contactus">
              <li>
                <a href="#" className="hover:text-[#A1C08F]">
                  Contact Us
                </a>
              </li>
            </Link>
          </ul>

          {/* Product Categories Section */}
          <h2 className="text-lg font-semibold mb-3 mt-6">
            Product Categories
          </h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <Link to="/gasoline">
              <li>
                <a href="#" className="hover:text-[#A1C08F]">
                  Gasoline
                </a>
              </li>
            </Link>
            <Link to="/engine">
              <li>
                <a href="#" className="hover:text-[#A1C08F]">
                  Engine
                </a>
              </li>
            </Link>
            <Link to="/diesel">
              <li>
                <a href="#" className="hover:text-[#A1C08F]">
                  Diesel
                </a>
              </li>
            </Link>
            <Link to="/serviceproducts">
              <li>
                <a href="#" className="hover:text-[#A1C08F]">
                  Service Products
                </a>
              </li>
            </Link>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Get in Touch</h2>
          <p className="text-sm text-gray-400">✉️ xlerator2024@gmail.com</p>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=xlerator2024@gmail.com"
          >
            {" "}
            <button className="w-[170px] h-[35px] text-[11px] font-inter p-2 bg-[#ffffff] text-gray-900 rounded-[5px] mt-[10px] hover:cursor-pointer">
              Contact Us Here!
            </button>
          </a>

          <div className="flex gap-4 mt-4">
            <a
              href="https://instagram.com/xlerator_indonesia"
              className="hover:text-[#A1C08F]"
              target="_blank"
            >
              <SiInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@xlerator_indonesia"
              className="hover:text-[#A1C08F]"
              target="_blank"
            >
              <SiTiktok />
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126929.2200672958!2d106.8098334235249!3d-6.192496345514704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698a4ca08e45a7%3A0x1433817d0ac2198a!2sSiomay%20Pink!5e0!3m2!1sen!2sid!4v1752135899843!5m2!1sen!2sid"
            width="100%"
            height="100"
            style={{ border: 0, borderRadius: "0.5rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-[15px]"
          />
          <p className="pt-6 text-left text-sm text-gray-500">
            RXHG+RVG, Jl. Taman Cemara, Pusaka Rakyat, Kec. Tarumajaya,
            Kabupaten Bekasi, Jawa Barat 17214
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Xlerator. All rights reserved.
      </div>
    </footer>
  );
};
