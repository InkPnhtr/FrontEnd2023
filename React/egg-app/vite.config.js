import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.0.87', // Set your custom host name or IP address
    port: 5173, // Set your custom port number
  },
})




