import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      name: 'Vite+TypeScript+PWA',
      description: 'test PWA',
      theme_color: '#ffffff',
      icons: [{
        src: 'android192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'android512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }]
    },
  })
  ],
  base: '/',
})
