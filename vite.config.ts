import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "tsx",
    jsx: "automatic",
  },
  optimizeDeps: {
    exclude: ["@swc/core"],
  },
});
