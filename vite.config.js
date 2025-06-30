import { defineConfig } from "vite";

export default defineConfig({
  base: "/Microsite-sitios-guapos/",
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
