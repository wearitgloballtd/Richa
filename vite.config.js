import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from network
    port: 5173, // Default Vite port (optional, can be changed)
  },
})
