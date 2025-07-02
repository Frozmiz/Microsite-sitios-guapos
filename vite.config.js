import { defineConfig } from "vite";

export default defineConfig({
  base: "/Microsite-sitios-guapos/",
  build: {
    rollupOptions: {
      input: [
        "index.html",
        "quienes-somos.html",
        "destinos.html",
        "blog.html",
        "registro.html",
        "login.html",
        "contacto.html"

      ],
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
