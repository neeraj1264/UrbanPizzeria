import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Urban Pizzeria',
        short_name: 'Urban-Pizzeria',
        description: 'Restaurant',
        start_url: '/',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
        icons: [
          {
            src: '/img/urban/logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/img/urban/logo-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\/img\/.*\.(png|jpg|jpeg|svg|gif)/, // Cache images
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60 // Cache for 30 Days
              }
            }
          },
          {
            urlPattern: /\/.*\.(mp4|webm)/, // Cache videos
            handler: 'NetworkFirst',
            options: {
              cacheName: 'videos',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 7 * 24 * 60 * 60 // Cache for 7 Days
              }
            }
          }
        ]
      }
    })
  ]
});
