import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "pwa vite project",
        short_name: "PWAViteProject",
        display: "standalone",
        background_color: "#FFE9D2",
        theme_color: "#FFE1C4",
        orientation: "portrait-primary",
        icons: [
          {
            src: "/img/icons/icon-72x72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "/img/icons/icon-96x96.png",
            type: "image/png",
            sizes: "96x96",
          },
          {
            src: "/img/icons/icon-128x128.png",
            type: "image/png",
            sizes: "128x128",
          },
          {
            src: "/img/icons/icon-144x144.png",
            type: "image/png",
            sizes: "144x144",
          },
          {
            src: "/img/icons/icon-152x152.png",
            type: "image/png",
            sizes: "152x152",
          },
          {
            src: "/img/icons/icon-192x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/img/icons/icon-384x384.png",
            type: "image/png",
            sizes: "384x384",
          },
          {
            src: "/img/icons/icon-512x512.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
        screenshots: [
          {
            src: "/img/screenshots/screenshot1-0ff68546.png",
            type: "image/png",
            sizes: "540x720",
            form_factor: "narrow",
          },
          {
            src: "/img/screenshots/screenshot2-1f78c4db.jpg",
            type: "image/jpeg",
            sizes: "540x720",
            form_factor: "narrow",
          },
          {
            src: "/img/screenshots/screenshot3-c1e02216.jpg",
            type: "image/jpeg",
            sizes: "540x720",
            form_factor: "narrow",
          },
          {
            src: "/img/screenshots/screenshot4-3a706c3c.png",
            type: "image/png",
            sizes: "1024x593",
            form_factor: "wide",
          },
          {
            src: "/img/screenshots/screenshot5-ea50826f.jpg",
            type: "image/jpeg",
            sizes: "1024x593",
            form_factor: "wide",
          },
          {
            src: "/img/screenshots/screenshot6-0168d284.jpg",
            type: "image/jpeg",
            sizes: "1024x593",
            form_factor: "wide",
          },
        ],
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,svg}"], // Cache JS, CSS, HTML, and assets
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "api-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});

// service workers are primarily designed for production environments, so some behaviors might differ slightly in dev mode.

// Production Simulation: Always test with npm run build and npm run preview to ensure everything works as expected in production.
