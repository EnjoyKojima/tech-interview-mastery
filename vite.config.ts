import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist/vite",
    ssr: "src/index.tsx",
    target: "es2023",
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
      },
    },
  },
});
