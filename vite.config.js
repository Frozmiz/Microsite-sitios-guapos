import { defineConfig } from "vite";

export default defineConfig({
  base: "/Microsite-sitios-guapos/",
  build: {
    rollupOptions: {
      input: [
        "index.html",
        "quienes-somos.html",
        "destinos.html",
        "blog",
        "registro",
        "login",
        "contacto"

      ],
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
