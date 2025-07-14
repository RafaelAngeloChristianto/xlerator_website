import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import pakeric from "../assets/pak_eric.jpg";

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

          {/* Section: Who founded XLERATOR */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12 bg-blue-50/70 backdrop-blur-md rounded-2xl p-10 shadow-md border border-blue-200"
          >
            <h2 className="text-center text-4xl font-bold font-Inter text-blue-800">
              Who founded XLERATOR?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="text-lg leading-relaxed space-y-4 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="font-Inter text-justify">
                  <span className="font-semibold">English:</span> <br />
                  Mr. Eric is a passionate innovator and automotive expert with
                  years of experience in engineering and marketing. Driven by
                  the vision of making car care accessible and premium, he
                  founded XLERATOR to bridge the gap between quality and
                  convenience in the automotive industry.
                </p>
                <p className="font-Inter text-justify">
                  He believes that every car owner deserves the best solutions
                  without the hassle — and that's the fuel behind XLERATOR’s
                  success.
                </p>
                <p className="font-Inter text-justify">
                  <span className="font-semibold">Indonesian:</span> <br />
                  Bapak Eric adalah seorang inovator penuh semangat dan ahli
                  otomotif dengan pengalaman bertahun-tahun di bidang teknik dan
                  pemasaran. Dengan visi untuk membuat perawatan kendaraan
                  menjadi lebih mudah diakses dan berkualitas tinggi, beliau
                  mendirikan XLERATOR untuk menjembatani kesenjangan antara
                  kualitas dan kenyamanan dalam industri otomotif.
                </p>
                <p className="font-Inter text-justify">
                  Beliau percaya bahwa setiap pemilik kendaraan layak
                  mendapatkan solusi terbaik tanpa kerepotan — dan inilah bahan
                  bakar utama di balik kesuksesan XLERATOR.
                </p>
              </motion.div>

              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={pakeric}
                  alt="Founder - Mr. Eric"
                  className="w-[280px] h-[280px] rounded-full object-cover border-4 border-blue-600 shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </>
  );
};
