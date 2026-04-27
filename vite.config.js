import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["electrosurgical-nell-iterative.ngrok-free.dev"],
    // Expose dev server on local network for mobile testing.
    host: true,
  },
});
