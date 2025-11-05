import React, { useState, useEffect, useRef } from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

import home_img from "../assets/home_img.png";
import products_img from "../assets/products.png";
import logo_building from "../assets/LOGO KANTOR NEW COMPRESSED.png";
import billboard from "../assets/billboard.png";
import "../index.css";

export const HomeScreen: React.FC = () => {
  const images = [home_img, logo_building];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const faqRef = useRef<HTMLHeadingElement>(null);
  const [faqVisible, setFaqVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const faqData = [
    {
      question: "What products do you offer?",
      answer:
        "We offer a wide range of gasoline, diesel, engine oils, and service products to meet your automotive needs.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can click the Contact Us button in the footer to directly send an email to our support team.",
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we provide delivery to selected areas. You can check availability during checkout or contact our support team.",
    },
    {
      question: "Can I return or exchange a product?",
      answer: "No, returns and exchanges are not available for purchases.",
    },
  ];

  // preload
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // initial fade
  useEffect(() => {
    const fade = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(fade);
  }, []);

  // auto-slide
  useEffect(() => {
    const fadeOut = setTimeout(() => setIsVisible(false), 4700);
    const fadeIn = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsVisible(true);
    }, 5000);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(fadeIn);
    };
  }, [currentIndex]);

  const handleManualSwitch = (index: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsVisible(true);
    }, 300);
  };

  // intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === categoriesRef.current && entry.isIntersecting)
            setCategoriesVisible(true);
          if (entry.target === faqRef.current && entry.isIntersecting)
            setFaqVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (categoriesRef.current) observer.observe(categoriesRef.current);
    if (faqRef.current) observer.observe(faqRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 overflow-hidden">
      <NavBar />

      {/* Hero */}
      <section className="relative w-full max-w-[1920px] mx-auto overflow-hidden">
        <div className="relative h-[500px] md:h-[650px] lg:h-[750px]">
          <img
            src={images[currentIndex]}
            alt="Hero"
            className={`w-full h-full object-cover transition-all duration-[1500ms] ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
          />

          {/* Subtle gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#383c8c]/40 via-transparent to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div
                className={`max-w-2xl transition-all duration-1000 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
                  }`}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                  Fuel Your{" "}
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-blue-200 mt-1">
                    Performance
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                  Premium automotive fluids and lubricants crafted for lasting
                  performance and protection.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/products"
                    className="px-8 py-4 bg-white text-[#383c8c] rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-[#383c8c]/40 flex items-center gap-2"
                  >
                    Explore Products
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </Link>
                  <Link
                    to="/aboutus"
                    className="px-8 py-4 border-2 border-white/50 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-50 via-slate-50/95 to-transparent" />
        </div>

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleManualSwitch(idx)}
              className={`transition-all rounded-full ${currentIndex === idx
                ? "w-10 h-3 bg-gradient-to-r from-[#383c8c] to-blue-600"
                : "w-3 h-3 bg-white/80 hover:scale-125"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Products */}
      <section
        ref={categoriesRef}
        className={`max-w-7xl mx-auto px-6 py-24 transition-all duration-1000 ${categoriesVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
          }`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group order-2 md:order-1">
            <img
              src={products_img}
              alt="Products"
              className="relative w-full rounded-2xl shadow-2xl border-4 border-white transition-all duration-700 group-hover:scale-[1.02]"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <span className="px-4 py-2 bg-gradient-to-r from-[#383c8c]/10 to-blue-500/10 text-[#383c8c] font-bold rounded-full text-sm tracking-wider">
              OUR PRODUCTS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Explore Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#383c8c] via-blue-600 to-purple-600">
                Categories
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Discover a full range of automotive fluids — from high-performance
              gasoline and diesel oils to engine lubricants and specialty
              service products.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {["Gasoline", "Diesel", "Engine Oils", "Service Products"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-xl shadow hover:shadow-lg border border-gray-200 hover:border-[#383c8c]/30 transition-all duration-300"
                  >
                    <span className="text-sm font-semibold text-gray-800 hover:text-[#383c8c]">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>

            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#383c8c] to-blue-600 text-white rounded-full font-bold hover:scale-105 transition-all duration-300 mt-4 shadow-lg"
            >
              View All Products
              <svg
                className="ml-2 w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20 mb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-gradient-to-r from-[#383c8c]/10 to-blue-500/10 text-[#383c8c] font-bold rounded-full text-sm tracking-wider">
              SUPPORT CENTER
            </span>
            <h2
              ref={faqRef}
              className={`text-4xl md:text-5xl font-extrabold mt-4 transition-all duration-700 ${faqVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
                }`}
            >
              Frequently Asked{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#383c8c] to-blue-600">
                Questions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg border transition-all duration-500 ${activeIndex === index
                    ? "border-[#383c8c]/50 shadow-[#383c8c]/10"
                    : "border-gray-200 hover:border-[#383c8c]/30"
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-800">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 transition-transform ${activeIndex === index ? "rotate-180 text-[#383c8c]" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${activeIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`transition-all duration-1000 ${faqVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
                }`}
            >
              <img
                src={billboard}
                alt="Support"
                className="rounded-2xl shadow-2xl border-4 border-white mb-8"
              />
              <div className="p-8 bg-gradient-to-br from-[#383c8c] to-blue-600 rounded-2xl text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                <p className="text-white/90 mb-6">
                  Our team is always ready to assist with any inquiries you may
                  have.
                </p>
                <Link to="/contactus">
                  <button className="w-full px-6 py-3 bg-white text-[#383c8c] font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:cursor-pointer">
                    Contact Support
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};