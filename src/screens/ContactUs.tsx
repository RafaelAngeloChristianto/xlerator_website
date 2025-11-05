import React from "react";
import horizontal_logo from "../assets/logo_sideways.png";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { SiGmail, SiInstagram, SiTiktok } from "react-icons/si";
import { motion } from "framer-motion";

export const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        {/* ===== Header Section ===== */}
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={horizontal_logo}
            alt="XLERATOR Logo"
            className="w-[240px] mb-6 drop-shadow-md"
          />

          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 tracking-tight">
            Contact <span className="text-blue-500">Us</span>
          </h1>

          <p className="text-gray-600 mt-3 max-w-md">
            Have a question, collaboration idea, or just want to say hi? <br />
            We’d love to hear from you!
          </p>
        </motion.div>

        {/* ===== Contact Card ===== */}
        <motion.div
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-10 w-full max-w-2xl border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* --- Card Header --- */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-blue-700">
              Get in Touch
            </h2>
            <p className="text-gray-600 mt-2">
              We’ll get back to you as soon as possible.
            </p>
          </div>

          {/* --- Email Section --- */}
          <div className="bg-blue-50 rounded-xl p-5 mb-8 flex flex-col items-center border border-blue-100">
            <div className="flex items-center gap-2 text-gray-800 mb-3">
              <SiGmail className="text-red-500 text-lg" />
              <span className="font-medium">xlerator2024@gmail.com</span>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=xlerator2024@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
                           text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md transition"
              >
                Contact Us Here!
              </motion.button>
            </a>
          </div>

          {/* --- Social Media Links --- */}
          <div className="flex justify-center gap-8 text-3xl text-gray-500 mb-10">
            <motion.a
              href="https://instagram.com/xlerator_indonesia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#3b82f6" }}
              className="transition-colors"
            >
              <SiInstagram />
            </motion.a>

            <motion.a
              href="https://www.tiktok.com/@xlerator_indonesia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#3b82f6" }}
              className="transition-colors"
            >
              <SiTiktok />
            </motion.a>
          </div>

          {/* --- Google Maps --- */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-blue-100 mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6760365171014!2d106.97647466953445!3d-6.170354999613552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b0055d13b93%3A0x6f3a9f6b3c8dcf6a!2sPT%20EXCEL%20SEJAHTERA%20AUTO!5e0!3m2!1sen!2sid!4v1762268567097!5m2!1sen!2sid"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="cursor-pointer"
            />
          </div>

          {/* --- Address --- */}
          <p className="text-gray-600 text-sm text-center leading-relaxed">
            📍 RXHG+RVG, Jl. Taman Cemara, Pusaka Rakyat, Kec. Tarumajaya, <br />
            Kabupaten Bekasi, Jawa Barat 17214
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
