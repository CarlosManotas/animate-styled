/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "AnimateStyled",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "styled-components"],
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
