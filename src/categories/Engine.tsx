import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

import engine from "../assets/categories/ENGINE.png";
import gasoline from "../assets/categories/GASOLINE.png";
import diesel from "../assets/categories/DIESEL.png";
import serviceproduct from "../assets/categories/SERVICE PRODUCT.png";
// products
import superengineflush from "../assets/products/SUPER ENGINE FLUSH.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Engine: React.FC = () => {
  const products = [
    {
      name: "Super Engine Flush",
      image: superengineflush,
      link: "/superengineflush",
    },
  ];

  return (
    <>
      <NavBar />

      <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="flex flex-col items-center">
          <motion.img
            className="w-[200px] rounded-3xl shadow-xl mb-8"
            src={engine}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          <motion.h1
            className="font-Inter text-4xl font-extrabold text-center text-gray-800 mb-4 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Engine Product Line
          </motion.h1>

          <motion.p
            className="font-Nunito text-gray-600 text-center max-w-2xl mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Discover our high-performance gasoline products engineered to clean,
            enhance efficiency, and boost engine life.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden hover:scale-105 transform hover:cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link to={product.link}>
                  <div className="w-full h-56 bg-gray-100 flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-5 text-center bg-white">
                    <h2 className="text-lg font-bold text-gray-800">
                      {product.name}
                    </h2>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Links to other categories */}
          {/* Category Links with Images */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Explore Other Categories
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Engine */}
              <Link to="/gasoline">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center bg-blue-100 p-4 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={gasoline}
                    className="w-35 h-24 object-contain mb-2"
                  />
                </motion.div>
              </Link>

              {/* Diesel */}
              <Link to="/diesel">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center bg-blue-100 p-4 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={diesel}
                    alt="Diesel"
                    className="w-24 h-24 object-contain mb-2"
                  />
                </motion.div>
              </Link>

              {/* Service Product */}
              <Link to="/serviceproduct">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center bg-blue-100 p-4 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={serviceproduct}
                    alt="Service Product"
                    className="w-55 h-24 object-contain mb-2"
                  />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};
