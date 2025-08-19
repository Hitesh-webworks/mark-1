import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // required for Codespaces
    port: 5173,   // or whatever Codespaces gives you
  },
  base: '/', // ✅ for custom domain (vidyalayweb.space)
})
