import React from "react";
import horizontal_logo from "../assets/logo_sideways.png";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { motion } from "framer-motion";

export const ContactUs: React.FC = () => {
  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Animated Logo */}
          <motion.img
            src={horizontal_logo}
            alt="Horizontal Logo"
            className="w-[220px] mb-8 cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Contact Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-4">We’d love to hear from you!</p>

            {/* Email */}
            <p className="text-sm text-gray-800 mb-2">
              ✉️ <span className="font-medium">xlerator2024@gmail.com</span>
            </p>

            {/* Gmail Compose Button */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=xlerator2024@gmail.com"
            >
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm mt-2 transition duration-200 cursor-pointer">
                Contact Us Here!
              </button>
            </a>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-6 text-2xl text-gray-600">
              <a
                href="https://instagram.com/xlerator_indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300 cursor-pointer"
              >
                <SiInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@xlerator_indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300 cursor-pointer"
              >
                <SiTiktok />
              </a>
            </div>

            {/* Google Maps */}
            <div className="mt-8 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126929.2200672958!2d106.8098334235249!3d-6.192496345514704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698a4ca08e45a7%3A0x1433817d0ac2198a!2sSiomay%20Pink!5e0!3m2!1sen!2sid!4v1752135899843!5m2!1sen!2sid"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="cursor-pointer"
              />
            </div>

            {/* Address */}
            <p className="mt-4 text-sm text-gray-500">
              📍 RXHG+RVG, Jl. Taman Cemara, Pusaka Rakyat, Kec. Tarumajaya,
              Kabupaten Bekasi, Jawa Barat 17214
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
