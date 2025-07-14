import React from "react";
import product from "../assets/products/SUPER ENGINE FLUSH.png";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

import gasoline from "../assets/categories/GASOLINE.png";
import diesel from "../assets/categories/DIESEL.png";
import serviceproduct from "../assets/categories/SERVICE PRODUCT.png";
import { Link } from "react-router-dom";

export const SuperEngineFlush: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-8 sm:px-6 sm:py-10">
        <motion.div
          className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-4 sm:p-6">
            <motion.img
              src={product}
              alt="Super Engine Flush"
              className="rounded-xl shadow-md w-full h-64 sm:h-80 md:h-[500px] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2">
              Super Engine Flush
            </h2>
            <h3 className="text-base sm:text-lg font-semibold text-gray-600 mb-4">
              300 ml
            </h3>

            <h4 className="text-sm sm:text-md font-semibold text-gray-800 mb-1">
              Aplikasi
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Tambahkan sebelum penggantian oli dan nyalakan mesin selama 15
              menit.
            </p>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Menghilangkan kotoran/oli yang kotor di ruang oli</li>
              <li>Memastikan oli yang masuk ke dalam ruang tetap baru</li>
              <li>Menurunkan konsumsi oli</li>
              <li>Memperpanjang umur mesin</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Explore Other Categories */}
      <motion.div
        className="mt-10 px-4 sm:px-6 py-12 sm:py-16 text-center rounded-t-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-10 tracking-tight">
          Explore Other Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
          {/* Gasoline */}
          <Link to="/gasoline">
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center bg-white px-6 py-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={gasoline}
                alt="Gasoline"
                className="w-35 h-24 object-contain mb-3"
              />
            </motion.div>
          </Link>

          {/* Diesel */}
          <Link to="/diesel">
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center bg-white px-6 py-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={diesel}
                alt="Diesel"
                className="w-24 h-24 object-contain mb-3"
              />
            </motion.div>
          </Link>

          {/* Service Product */}
          <Link to="/serviceproduct">
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center bg-white px-6 py-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={serviceproduct}
                alt="Service Product"
                className="w-55 h-24 object-contain mb-3"
              />
            </motion.div>
          </Link>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};
