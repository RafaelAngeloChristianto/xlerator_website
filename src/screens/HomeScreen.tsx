import React, { useState, useEffect, useRef } from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

import home_img from "../assets/home_img.png";
import products_img from "../assets/products.png";
import logo_building from "../assets/LOGO KANTOR NEW COMPRESSED.png";
import billboard from "../assets/billboard.png";
// import map from "../assets/PETA EXLATOR.png";
// import manfaat from "../assets/TAGLINE XLERATOR.png";
import "../index.css";

export const HomeScreen: React.FC = () => {
  const images = [home_img, logo_building];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLHeadingElement>(null);
  const [categoriesVisible, setCategoriesVisible] = useState(false);
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
        "You can click the Contact Us Here button in the footer to automatically have an email template to be able to send to our email",
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we offer delivery across selected locations. Please check availability during checkout or contact support.",
    },
    {
      question: "Can I return or exchange a product?",
      answer: "No, returns and exchanges are not allowed with any purchases.",
    },
  ];

  // Fade-in on mount
  useEffect(() => {
    const initialFade = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(initialFade);
  }, []);

  // Image auto-slider
  useEffect(() => {
    const fadeOut = setTimeout(() => setIsVisible(false), 3700);
    const fadeIn = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsVisible(true);
    }, 4000);
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

  // Intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === categoriesRef.current && entry.isIntersecting) {
            setCategoriesVisible(true);
          }
          if (entry.target === faqRef.current && entry.isIntersecting) {
            setFaqVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (categoriesRef.current) observer.observe(categoriesRef.current);
    if (faqRef.current) observer.observe(faqRef.current);

    return () => {
      if (categoriesRef.current) observer.unobserve(categoriesRef.current);
      if (faqRef.current) observer.unobserve(faqRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar />

      {/* Hero Image Slider */}
      <div className="relative mt-[30px] w-full max-w-[1920px] mx-auto mt-0 rounded-xl overflow-hidden bg-[#f7f9fc]">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className={`w-full transition-all duration-700 ease-in-out transform ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />
        {/* Soft bottom fade overlay */}
        {/* Soft bottom fade overlay */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f7f9fc] via-[#f7f9fc]/80 to-transparent pointer-events-none z-10" />
        {/* Circle Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform flex gap-3 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleManualSwitch(idx)}
              className={`w-4 h-4 rounded-full border-2 shadow transition-all duration-300 ${
                currentIndex === idx ? "bg-[#383c8c]" : "bg-white"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Product Categories */}
      <section
        ref={categoriesRef}
        className={`max-w-6xl mx-auto mt-[80px] px-6 flex flex-col md:flex-row items-center gap-12 transition-all duration-700 ${
          categoriesVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[36px] font-bold mb-4 text-[#383c8c]">
            Explore Our Product Categories
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed text-justify">
            Discover a full range of automotive fluids - from high-performance
            gasoline and diesel oils to engine lubricants and specialized
            service products.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-[#383c8c] text-white rounded-full hover:bg-[#2f336b] transition duration-300 shadow-md text-base font-semibold"
          >
            Explore Product Categories
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src={products_img}
            alt="Product Categories"
            className="max-w-full md:max-w-[650px] object-contain rounded-xl shadow-lg"
          />
        </div>
      </section>

    

      {/* FAQ Section */}
      <h1
        ref={faqRef}
        className={`font-nunito text-center mt-[100px] text-[36px] font-bold text-[#383c8c] transition-all duration-700 ${
          faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Frequently Asked Questions
      </h1>
      <section className="px-6 max-w-6xl mx-auto mt-10 mb-28 flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              style={{
                transitionDelay: faqVisible ? `${index * 100}ms` : "0ms",
              }}
              className={`bg-white rounded-xl shadow-lg transform transition duration-700 ease-in-out ${
                faqVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-lg font-medium text-gray-800 hover:bg-gray-100 transition rounded-t-xl cursor-pointer"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 px-6 text-gray-600 ${
                  activeIndex === index ? "max-h-40 py-3" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 flex justify-center items-start">
          <img
            src={billboard}
            alt="Products"
            className="w-full max-w-[500px] rounded-xl shadow-lg object-contain"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};
