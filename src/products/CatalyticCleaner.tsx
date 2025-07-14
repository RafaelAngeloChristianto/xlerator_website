import React from "react";
import product from "../assets/products/CATALYTIC CHAMBER.png";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

import catalytic from "../assets/products/CATALYTIC CHAMBER.png";
import fueltankcleaner from "../assets/products/FULL TANK CLEANER.png";
import injectorcleaner from "../assets/products/INJETOR CLEANER.png";
import superenginecleaner from "../assets/products/SUPER ENGINE CONDITIONER.png";
import carboncleaner from "../assets/products/CARBON CLEANER.png";
import { RelatedProductGallery } from "../components/RelatedProductGallery";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import engine from "../assets/categories/ENGINE.png";
import diesel from "../assets/categories/DIESEL.png";
import serviceproduct from "../assets/categories/SERVICE PRODUCT.png";

const gasolineProducts = [
  {
    name: "Catalytic and Chamber Cleaner",
    image: catalytic,
    link: "/catalytic",
  },
  {
    name: "Fuel Tank Cleaner",
    image: fueltankcleaner,
    link: "/fueltankcleaner",
  },
  {
    name: "Injector Cleaner",
    image: injectorcleaner,
    link: "/injectorcleaner",
  },
  {
    name: "Super Engine Cleaner",
    image: superenginecleaner,
    link: "/superengineconditioner",
  },
  {
    name: "Carbon Cleaner",
    image: carboncleaner,
    link: "/carboncleaner",
  },
];

export const CatalyticCleaner: React.FC = () => {
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
              alt="Catalytic Chamber Cleaner"
              className="rounded-xl shadow-md w-full h-64 sm:h-80 md:h-[500px] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2">
              Catalytic & Chamber Cleaner
            </h2>
            <h3 className="text-base sm:text-lg font-semibold text-gray-600 mb-4">
              250 ml
            </h3>

            <h4 className="text-sm sm:text-md font-semibold text-gray-800 mb-1">
              Aplikasi
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Tuangkan ke tangki bahan bakar minyak
            </p>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>
                Menghilangkan endapan karbon di sistem pembuangan di catalytic
                converter
              </li>
              <li>Meningkatkan efisiensi bahan bakar minyak</li>
              <li>Mengurangi emisi/polusi gas buang</li>
              <li>Memperpanjang umur mesin</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center items-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <RelatedProductGallery products={gasolineProducts} />
      </motion.div>

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
          {/* Engine */}
          <Link to="/engine">
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center bg-white px-6 py-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={engine}
                alt="Engine"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-3"
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
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-3"
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
