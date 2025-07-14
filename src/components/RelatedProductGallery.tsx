import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface Product {
  name: string;
  image: string;
  link: string;
}

interface Props {
  products: Product[];
}

export const RelatedProductGallery: React.FC<Props> = ({ products }) => {
  const location = useLocation();

  return (
    <div className="mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 w-full">
      <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-6 sm:mb-8 text-center">
        Explore Other Related Products
      </h2>

      {/* Wrapper to center on desktop and allow scroll on mobile */}
      <div className="w-full flex justify-center">
        <div className="flex overflow-x-auto space-x-4 py-4 px-1 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 max-w-full">
          {products.map((product, index) => {
            const isActive = location.pathname === product.link;

            return (
              <motion.div
                key={index}
                className={`flex-shrink-0 snap-start bg-white rounded-xl border ${
                  isActive ? "border-blue-500 shadow-xl" : "border-gray-200"
                } hover:shadow-md transition-shadow w-[140px] sm:w-[160px] md:w-[180px]`}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={product.link}>
                  <div className="h-24 sm:h-28 bg-gray-100 flex items-center justify-center p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="text-center px-2 py-2">
                    <p className="text-xs sm:text-sm font-medium text-gray-700">
                      {product.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
