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

const categories = [
  { name: "Gasoline", image: gasoline, link: "/gasoline" },
  { name: "Engine", image: engine, link: "/engine" },
  { name: "Diesel", image: diesel, link: "/diesel" },
  { name: "Service Products", image: serviceproduct, link: "/serviceproduct" },
];

const fadeInVariant = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 30,
    scale: 0.95,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 80,
    },
  }),
};

export const Products: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col epic-background">
      <NavBar />

      <div className="flex-grow py-14 px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Our Product Categories
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our specialized product lines
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className="flex justify-center"
            >
              <Link to={category.link}>
                <div className="bg-white rounded-2xl shadow-md w-[240px] h-[180px] flex justify-center items-center p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform-gpu overflow-hidden will-change-transform">
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="max-h-[100px] mx-auto object-contain object-center"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 120 }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
