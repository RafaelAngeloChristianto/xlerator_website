// tailwind.config.js
import plugin from "tailwind-scrollbar";

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // make sure this covers your files
  ],
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
    },
  },
  plugins: [plugin], // 👈 Here is where you put the plugin
};
