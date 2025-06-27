import { defineConfig } from "vite";

export default defineConfig({
  base: "/ConquerBlocks-CSS-P4-Portfolio/",
  build: {
    rollupOptions: {
      input: [
        "index.html",

      ],
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
