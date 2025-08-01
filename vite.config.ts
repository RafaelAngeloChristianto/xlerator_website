import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Auto-detect base depending on environment
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/xlerator_website/" : "/",
  plugins: [react()],
});
