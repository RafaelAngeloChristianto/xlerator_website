import React from "react";
import product from "../assets/products/SEMIR BAN.png";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

import gasoline from "../assets/categories/GASOLINE.png";
import engine from "../assets/categories/ENGINE.png";
import diesel from "../assets/categories/DIESEL.png";

// products
import brakepartscleaner from "../assets/products/BRAKE PART CLEANER.png";
import siliconespray from "../assets/products/SILICONE CLEANER.png";
import airsanitizer from "../assets/products/FRASH SANOTARY.png";
import airaccu from "../assets/products/AIR ACCU.png";
import wiperfluid from "../assets/products/WIPER.png";
import tyrepolish from "../assets/products/SEMIR BAN.png";
import shampoo from "../assets/products/SHAMPO.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RelatedProductGallery } from "../components/RelatedProductGallery";

const serviceProducts = [
  {
    name: "Brake Parts Cleaner",
    image: brakepartscleaner,
    link: "/brakepartscleaner",
  },
  { name: "Silicone Spray", image: siliconespray, link: "/siliconespray" },
  { name: "Air Sanitizer", image: airsanitizer, link: "/airsanitizer" },
  { name: "Air ACCU", image: airaccu, link: "/airaccu" },
  { name: "Wiper Fluid", image: wiperfluid, link: "/wiperfluid" },
  { name: "Tyre Polish", image: tyrepolish, link: "/tyrepolish" },
  { name: "Car & Bike Shampoo", image: shampoo, link: "/shampoo" },
];

export const TyrePolish: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100-to-br px-6 py-10">
        <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full">
          {/* Image Section */}
          <div className="w-1/2 bg-gray-50 flex items-center justify-center p-6">
            <img
              src={product}
              className="rounded-xl shadow-md w-[500px] h-[500px] object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              Tyre Polish
            </h2>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">
              5 liter
            </h3>

            <h4 className="text-md font-semibold text-gray-800 mb-1">
              Aplikasi
            </h4>
            <p className="text-gray-600 mb-4">
              Semprot atau oles ke ban bersih & kering, ratakan, biarkan
              mengering
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Untuk membersihkan ban dari kotoran yang membandel</li>
              <li>
                Membuat ban tampak seperti baru dengan lebih hitam pekat sesuai
                warna karet ban aslinya
              </li>
              <li>
                Memberikan perawatan agar ban tetap terjaga elastisitasnya
              </li>
            </ul>
          </div>
        </div>
      </div>

      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <RelatedProductGallery products={serviceProducts} />
      </motion.div>

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
          <Link to="/gasoline">
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center bg-white px-6 py-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img src={gasoline} className="w-35 h-24 object-contain mb-3" />
            </motion.div>
          </Link>
          {/* Engine */}
          <Link to="/engine">
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center bg-white px-6 py-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={engine}
                alt="Engine"
                className="w-24 h-24 object-contain mb-3"
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
        </div>
      </motion.div>

      <Footer />
    </>
  );
};
