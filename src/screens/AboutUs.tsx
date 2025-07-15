import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

export const AboutUs: React.FC = () => {
  return (
    <>
      <NavBar />

      {/* Background Wrapper */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 px-6 py-16">
        <div className="max-w-screen-lg mx-auto space-y-24">
          {/* Section: What is XLERATOR */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-10 border border-blue-100"
          >
            <h1 className="text-center text-4xl font-bold font-Inter text-blue-800">
              What is XLERATOR?
            </h1>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-semibold">English:</span>
              <p className="font-Inter text-lg leading-relaxed text-gray-700">
                Xlerator is a modern automotive product platform offering a wide
                range of solutions including gasoline, diesel, engine oils, and
                service products. With a clean and dynamic design, Xlerator aims
                to simplify the shopping experience while delivering quality and
                performance. Users can explore categories, access detailed
                information, and find trusted products tailored to their vehicle
                needs — all in one place. Whether you're maintaining, upgrading,
                or fueling your engine, Xlerator accelerates your journey.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="font-semibold">Indonesian:</span>
              <p className="font-Inter text-lg leading-relaxed text-gray-700">
                Xlerator adalah platform produk otomotif modern yang menawarkan
                berbagai solusi, termasuk bensin, solar, oli mesin, dan produk
                layanan lainnya. Dengan desain yang bersih dan dinamis, Xlerator
                bertujuan untuk menyederhanakan pengalaman berbelanja sambil
                memberikan kualitas dan performa terbaik. Pengguna dapat
                menjelajahi berbagai kategori, mengakses informasi secara
                detail, dan menemukan produk terpercaya yang sesuai dengan
                kebutuhan kendaraan mereka — semuanya dalam satu tempat. Baik
                untuk perawatan, peningkatan, maupun pengisian bahan bakar,
                Xlerator mempercepat perjalanan Anda.
              </p>
            </motion.div>
          </motion.section>

          
        </div>
      </div>
      <Footer />
    </>
  );
};
