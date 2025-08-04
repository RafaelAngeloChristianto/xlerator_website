// tailwind.config.js
import plugin from "tailwind-scrollbar";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      fontFamily: {
        jomolhari: ["Jomolhari", "serif"],
        hammersmith: ["Hammersmith One", "sans-serif"],
        halant: ["Halant", "serif"],
        hanuman: ["Hanuman", "serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        display: ["Inter", "sans-serif"], // Add display font for font-display class
      },
    },
  },
  plugins: [plugin],
};
