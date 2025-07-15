import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import excellogo from "../assets/LOGO PT EXCEL.png"


export const AboutUs: React.FC = () => {
  return (
    <>
      <NavBar />

      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 px-6 py-16 font-sans">
        <div className="max-w-screen-lg mx-auto space-y-24">
          {/* xlerator */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-10 border border-blue-100"
          >
            <h1 className="text-center text-4xl font-bold text-blue-800 font-display">
              What is XLERATOR?
            </h1>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-semibold">English:</span>
              <p className="text-lg leading-relaxed text-gray-700 text-justify">
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
              <p className="text-lg leading-relaxed text-gray-700 text-justify">
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

          {/* pt */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12 bg-blue-50/70 backdrop-blur-md rounded-2xl p-10 shadow-md border border-blue-200"
          >
            <h2 className="text-center text-4xl font-bold text-blue-800 font-display">
              What is PT EXCEL SEJAHTERA AUTO?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="text-lg leading-relaxed space-y-4 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="font-semibold">English:</span>
                <p className="text-justify">
                  PT EXCEL SEJAHTERA AUTO was established in 2024 and has
                  continued to grow over time.
                </p>
                <p className="text-justify">
                  PT EXCEL SEJAHTERA AUTO <br />
                  is committed to maintaining competitiveness in penetrating the
                  market. With established infrastructure, efficient management,
                  and the support of professional, honest, and resilient
                  personnel, PT EXCEL SEJAHTERA AUTO is ready to compete with
                  similar companies in gaining market share.
                </p>
                <span className="font-semibold">Indonesian:</span>
                <p className="text-justify">
                  PT EXCEL SEJAHTERA AUTO berdiri pada tahun 2024 dan terus
                  berkembang dengan seiring berjalannya waktu.
                </p>
                <p className="text-justify">
                  PT EXCEL SEJAHTERA AUTO <br />
                  berkomitmen untuk tetap memiliki daya saing dalam melakukan
                  penetrasi pasar. Dengan infrastruktur yang telah terbangun
                  ditambah efisiensi manajemen serta dukungan tenaga-tenaga yang
                  professional, jujur dan tangguh. PT EXCEL SEJAHTERA AUTO siap
                  bersaing dengan perusahaan sejenis dalam perolehan pangsa
                  pasar.
                </p>
              </motion.div>

              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img className="w-[400px] rounded-" src={excellogo} alt="Logo PT Excel" />
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </>
  );
};
