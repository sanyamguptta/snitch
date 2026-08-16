import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      // forwarding all request coming on our vite server starting with '/api' to the target's value
      "/api": {
        target: "http://localhost:3000", //api where want to forward the request
        changeOrigin: true,
        secure: false, // means, to allow http (not secured) protocols request also
      }
    }   
  }
})
