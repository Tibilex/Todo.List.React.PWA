import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    manifest: {
      name: 'Todo PWA',
      short_name: 'PWA',
      description: 'First todo list application based on: Typescript and React',
      theme_color: '#2c3440',
      background_color: '#2c3440',
      display: 'standalone',
      icons: [
        {
          src: '/icon/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon/icon-256x256.png',
          sizes: '256x256',
          type: 'image/png'
        },
        {
          src: '/icon/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png'
        },
        {
          src: '/icon/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })
  ],
  base: '/',
})
