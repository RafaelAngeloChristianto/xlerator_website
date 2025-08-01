import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // ✅ Always "/" for root deployments like Cloudflare Pages
  plugins: [react()],
});
