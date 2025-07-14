import React from "react";
import product from "../assets/products/DIESEL PURGE.png";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

import gasoline from "../assets/categories/GASOLINE.png";
import engine from "../assets/categories/ENGINE.png";
import serviceproduct from "../assets/categories/SERVICE PRODUCT.png";
import { Link } from "react-router-dom";

export const DieselPurge: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100-to-br px-6 py-10">
        <motion.div
          className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
            <motion.img
              src={product}
              alt="Diesel Purge"
              className="rounded-xl shadow-md w-[500px] h-[500px] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              Diesel Purge
            </h2>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">400 ml</h3>

            <h4 className="text-md font-semibold text-gray-800 mb-1">
              Aplikasi
            </h4>
            <p className="text-gray-600 mb-4">
              Tuangkan ke tangki bahan bakar minyak
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Membersihkan karbon dan kotoran di saluran/diesel</li>
              <li>Mengembalikkan tenaga/power diesel ke kondisi awal</li>
              <li>Memperpanjang umur pompa tekanan tinggi diesel</li>
              <li>Meningkatkan efisiensi bahan bakar minyak</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-10 px-6 py-16 text-center rounded-t-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10 tracking-tight">
          Explore Other Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {/* Engine */}
          <Link to="/gasoline">
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center bg-white px-6 py-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img src={gasoline} className="w-35 h-24 object-contain mb-3" />
            </motion.div>
          </Link>

          {/* Diesel */}
          <Link to="/engine">
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center bg-white px-6 py-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img src={engine} className="w-24 h-24 object-contain mb-3" />
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
