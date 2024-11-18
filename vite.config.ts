/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["**/__tests__/**", "**/*.test.*"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "AnimateStyled",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "styled-components"],
      input: {
        main: resolve(__dirname, "src/index.tsx"),
      },
      output: {
        globals: {
          react: "React",
          "styled-components": "styled",
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
