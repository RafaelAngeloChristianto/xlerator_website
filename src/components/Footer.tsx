import React from "react";
import { MapPin, Mail } from "lucide-react";

// Simple icon components to replace react-icons
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/aboutus", label: "About Us" },
    { href: "/contactus", label: "Contact Us" }
  ];

  const productLinks = [
    { href: "/gasoline", label: "Gasoline" },
    { href: "/engine", label: "Engine" },
    { href: "/diesel", label: "Diesel" },
    { href: "/serviceproducts", label: "Service Products" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-[#A1C08F] tracking-tight">
                Xlerator
              </h1>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Empowering Progress.<br />Accelerating Potential.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/xlerator_indonesia"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#A1C08F] flex items-center justify-center transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.tiktok.com/@xlerator_indonesia"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#A1C08F] flex items-center justify-center transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Quick Links</h2>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#A1C08F] transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Products</h2>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#A1C08F] transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Contact Us</h2>

            {/* Email */}
            <div className="flex items-start gap-3 mb-4">
              <Mail className="w-5 h-5 text-[#A1C08F] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400 break-all">
                  xlerator2024@gmail.com
                </p>
              </div>
            </div>

            {/* Contact Button */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=xlerator2024@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-5 py-2.5 text-sm font-medium bg-[#A1C08F] text-gray-900 rounded-lg hover:bg-[#8db07a] transition-all duration-300 hover:shadow-lg hover:shadow-[#A1C08F]/20">
                Send us a message
              </button>
            </a>

            {/* Address */}
            <div className="flex items-start gap-3 mt-6">
              <MapPin className="w-5 h-5 text-[#A1C08F] mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-400 leading-relaxed">
                RXHG+RVG, Jl. Taman Cemara, Pusaka Rakyat, Kec. Tarumajaya,
                Kabupaten Bekasi, Jawa Barat 17214
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-10 rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6760365171014!2d106.97647466953445!3d-6.170354999613552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b0055d13b93%3A0x6f3a9f6b3c8dcf6a!2sPT%20EXCEL%20SEJAHTERA%20AUTO!5e0!3m2!1sen!2sid!4v1762268567097!5m2!1sen!2sid"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Xlerator Location Map"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Xlerator. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-[#A1C08F] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#A1C08F] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};