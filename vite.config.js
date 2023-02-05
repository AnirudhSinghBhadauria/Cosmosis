import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  optimizeDeps: {
    exclude: [
    'firebase',
    'firebase/app',
    'firebase/auth',
    'firebase/firestore',
    'firebase/analytics',
    'firebase/storage'
    ],
    },
  plugins: [react()],
})
