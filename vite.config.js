import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Use absolute paths for assets
  plugins: [react()],
});
