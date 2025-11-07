import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import "./Products.css";
// categories
import gasoline from "../assets/categories/GASOLINE.png";
import engine from "../assets/categories/ENGINE.png";
import diesel from "../assets/categories/DIESEL.png";
import serviceproduct from "../assets/categories/SERVICE PRODUCT.png";
import type { Variants } from "framer-motion";

const categories = [
  { name: "Gasoline", image: gasoline, link: "/gasoline", color: "from-blue-500 to-blue-600" },
  { name: "Engine", image: engine, link: "/engine", color: "from-orange-500 to-red-600" },
  { name: "Diesel", image: diesel, link: "/diesel", color: "from-amber-500 to-yellow-600" },
  { name: "Service Products", image: serviceproduct, link: "/serviceproduct", color: "from-green-500 to-emerald-600" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const Products: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <NavBar />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="flex-grow py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-800">
              Our Product Categories
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Explore our specialized product lines
          </p>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group"
            >
              <Link to={category.link} className="block">
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-80 border border-gray-100">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-[-2px] rounded-3xl bg-gradient-to-r ${category.color} blur-md opacity-50`} />
                  </div>

                  {/* Card content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-8 z-10">
                    {/* Image container with animated background */}
                    <motion.div
                      className="relative w-full h-full rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
                      whileHover={{ rotate: [0, -3, 3, -3, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>

                      <img
                        src={category.image}
                        alt={category.name}
                        className="relative z-10 max-h-[160px] w-auto object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 3) * 20}%`,
                        }}
                        animate={{
                          y: [-20, -60, -20],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};