import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/variables.scss" as *;`,
        silenceDeprecations: ["legacy-js-api"],
      },
    },
    modules: {
      localsConvention: "camelCase",
    },
  },
});
