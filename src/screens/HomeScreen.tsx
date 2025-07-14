import React, { useState, useEffect, useRef } from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

import home_img from "../assets/home_img.png";
import products_img from "../assets/products.png";

import gasoline from "../assets/categories/GASOLINE.png";
import engine from "../assets/categories/ENGINE.png";
import diesel from "../assets/categories/DIESEL.png";
import serviceproduct from "../assets/categories/SERVICE PRODUCT.png";

import billboard from "../assets/billboard.png";

export const HomeScreen: React.FC = () => {
  const images = [home_img, products_img];
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

  // Initial fade-in on mount for image
  useEffect(() => {
    const initialFade = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(initialFade);
  }, []);

  // Auto image slider
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

  // Scroll animation for sections
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
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Hero Image Slider */}
      <div className="relative w-full max-w-[1920px] mx-auto mt-10">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className={`w-full transition-all duration-500 ease-in-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        />

        {/* Circle indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleManualSwitch(idx)}
              className={`w-3 h-3 rounded-full border-2 cursor-pointer ${
                currentIndex === idx ? "bg-black" : "bg-white"
              } transition-all duration-300`}
            ></button>
          ))}
        </div>
      </div>

      {/* Product Categories */}
      <h1 className="text-center mt-[70px] text-[30px] font-Hammersmith One font-bold mb-[30px]">
        PRODUCT CATEGORIES
      </h1>
      <section
        ref={categoriesRef}
        className={`flex flex-wrap justify-center items-center gap-6 md:gap-10 transition-all duration-700 ${
          categoriesVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        <Link to="gasoline">
          <div className="p-5 rounded-[20px] shadow-lg w-[200px] h-[200px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] flex flex-col column justify-center items-center hover:cursor-pointer bg-white hover:scale-105">
            <img src={gasoline} alt="Gasoline" />
          </div>
        </Link>
        <Link to="engine">
          <div className="p-10 rounded-[20px] shadow-lg w-[200px] h-[200px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] flex flex-col justify-center items-center hover:cursor-pointer bg-white hover:scale-105">
            <img src={engine} alt="Engine" />
          </div>
        </Link>
        <Link to="diesel">
          <div className="p-10 rounded-[20px] shadow-lg w-[200px] h-[200px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] flex flex-col justify-center items-center hover:cursor-pointer bg-white hover:scale-105">
            <img src={diesel} alt="Diesel" />
          </div>
        </Link>
        <Link to="serviceproduct">
          <div className="p-5 rounded-[20px] shadow-lg w-[290px] h-[200px] sm:w-[270px] sm:h-[180px] md:w-[290px] md:h-[200px] flex flex-col justify-center items-center hover:cursor-pointer bg-white hover:scale-105">
            <img
              className="mt-[10px]"
              src={serviceproduct}
              alt="Service Product"
            />
          </div>
        </Link>
      </section>

      {/* FAQ Section */}
      <h1
        ref={faqRef}
        className={`text-center mt-[100px] text-[30px] font-Hammersmith One font-bold transition-all duration-700 ${
          faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        FAQs
      </h1>
      <section className="px-6 max-w-6xl mx-auto mt-10 mb-30 flex flex-col md:flex-row gap-10 items-start md:items-start">
        {/* FAQ List */}
        <div className="flex-1 space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              style={{
                transitionDelay: faqVisible ? `${index * 150}ms` : "0ms",
              }}
              className={`bg-white rounded-xl shadow-md transform transition-opacity transition-transform duration-700 ease-in-out ${
                faqVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-800 focus:outline-none cursor-pointer mt-[30px]"
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
                className={`overflow-hidden transition-all duration-500 ease-in-out px-6 text-gray-600 ${
                  activeIndex === index ? "max-h-40 py-2" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Billboard Image */}
        <div className="flex-1 flex justify-center items-start">
          <img
            className="w-full max-w-[500px] object-contain shadow-lg rounded-xl"
            src={billboard}
            alt="Billboard"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};
