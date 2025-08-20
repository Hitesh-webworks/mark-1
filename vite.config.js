import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 👈 forces Vite to listen on all interfaces
    port: 5173,      // 👈 default port Codespaces expects
  },
})
