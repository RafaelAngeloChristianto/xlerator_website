import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import excellogo from "../assets/LOGO PT EXCEL.png";
import logo from "../assets/logo.png";
import caligraphy from "../assets/caligraphy.png";
import "./Products.css";

// Animation variants for reusability
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

// Content data for maintainability
const xleratorContent = {
  english: `Xlerator is a modern automotive product platform offering a wide range of solutions including gasoline, diesel, engine oils, and service products. With a clean and dynamic design, Xlerator aims to simplify the shopping experience while delivering quality and performance. Users can explore categories, access detailed information, and find trusted products tailored to their vehicle needs — all in one place. Whether you're maintaining, upgrading, or fueling your engine, Xlerator accelerates your journey.`,
  indonesian: `Xlerator adalah platform produk otomotif modern yang menawarkan berbagai solusi, termasuk bensin, solar, oli mesin, dan produk layanan lainnya. Dengan desain yang bersih dan dinamis, Xlerator bertujuan untuk menyederhanakan pengalaman berbelanja sambil memberikan kualitas dan performa terbaik. Pengguna dapat menjelajahi berbagai kategori, mengakses informasi secara detail, dan menemukan produk terpercaya yang sesuai dengan kebutuhan kendaraan mereka — semuanya dalam satu tempat. Baik untuk perawatan, peningkatan, maupun pengisian bahan bakar, Xlerator mempercepat perjalanan Anda.`
};

const ptExcelContent = {
  english: [
    "PT EXCEL SEJAHTERA AUTO was established in 2024 and has continued to grow over time.",
    "PT EXCEL SEJAHTERA AUTO is committed to maintaining competitiveness in penetrating the market. With established infrastructure, efficient management, and the support of professional, honest, and resilient personnel, PT EXCEL SEJAHTERA AUTO is ready to compete with similar companies in gaining market share."
  ],
  indonesian: [
    "PT EXCEL SEJAHTERA AUTO berdiri pada tahun 2024 dan terus berkembang dengan seiring berjalannya waktu.",
    "PT EXCEL SEJAHTERA AUTO berkomitmen untuk tetap memiliki daya saing dalam melakukan penetrasi pasar. Dengan infrastruktur yang telah terbangun ditambah efisiensi manajemen serta dukungan tenaga-tenaga yang professional, jujur dan tangguh. PT EXCEL SEJAHTERA AUTO siap bersaing dengan perusahaan sejenis dalam perolehan pangsa pasar."
  ]
};

// Reusable components
const SectionCard: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ""
}) => (
  <motion.section
    {...fadeInUp}
    viewport={{ once: true }}
    className={`bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl px-6 sm:px-10 py-10 sm:py-12 border border-blue-100 hover:shadow-2xl transition-shadow duration-300 ${className}`}
  >
    {children}
  </motion.section>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-center text-3xl sm:text-5xl font-bold text-blue-900 font-display mb-8 sm:mb-10 tracking-tight">
    {children}
  </h2>
);

const LanguageSection: React.FC<{
  language: string;
  content: string | string[];
  delay?: number
}> = ({ language, content, delay = 0 }) => (
  <motion.div
    {...fadeIn}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="space-y-4"
  >
    <h3 className="font-bold text-lg text-blue-700 flex items-center gap-2">
      <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
      {language}
    </h3>
    {Array.isArray(content) ? (
      content.map((paragraph, idx) => (
        <p key={idx} className="text-base sm:text-lg leading-relaxed text-gray-700 text-justify">
          {paragraph}
        </p>
      ))
    ) : (
      <p className="text-base sm:text-lg leading-relaxed text-gray-700 text-justify">
        {content}
      </p>
    )}
  </motion.div>
);

export const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col epic-background">
      <NavBar />

      <main className="text-gray-900 px-4 sm:px-6 pt-12 sm:pt-16 pb-8 font-sans flex-1">
        <div className="max-w-screen-xl mx-auto space-y-20 sm:space-y-28">

          {/* XLERATOR Section */}
          <SectionCard>
            <SectionTitle>What is XLERATOR?</SectionTitle>

            <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14">
              <motion.img
                src={logo}
                alt="Xlerator Logo"
                className="w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] flex-shrink-0 drop-shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              <div className="flex-1 space-y-8 sm:space-y-10">
                <LanguageSection
                  language="English"
                  content={xleratorContent.english}
                  delay={0.2}
                />
                <LanguageSection
                  language="Indonesian"
                  content={xleratorContent.indonesian}
                  delay={0.4}
                />
              </div>
            </div>
          </SectionCard>

          {/* PT EXCEL Section */}
          <SectionCard>
            <SectionTitle>What is PT EXCEL SEJAHTERA AUTO?</SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div
                {...fadeIn}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <LanguageSection
                  language="English"
                  content={ptExcelContent.english}
                  delay={0.3}
                />
                <LanguageSection
                  language="Indonesian"
                  content={ptExcelContent.indonesian}
                  delay={0.5}
                />
              </motion.div>

              <motion.div
                className="flex justify-center lg:justify-end"
                whileHover={{ scale: 1.08, rotate: -2 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                <img
                  className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] drop-shadow-2xl"
                  src={excellogo}
                  alt="PT Excel Sejahtera Auto Logo"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </SectionCard>

        </div>
      </main>

      {/* Attribution Footer */}
      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-right mb-[-50px] mr-[20px] px-6 py-4 text-gray-600"
        aria-label="Website attribution"
      >
        <span className="text-xs sm:text-sm block font-medium mb-1">
          Website managed by
        </span>
        <a
          href="https://rafaelangelo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-110"
          aria-label="Visit Rafael Angelo's portfolio"
        >
          <img
            src={caligraphy}
            alt="Rafael Angelo signature"
            className="w-20 sm:w-24 object-contain"
            loading="lazy"
          />
        </a>
      </motion.aside>

      <Footer />
    </div>
  );
};