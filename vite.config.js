import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      // Force use of websockets instead of auto
      protocol: 'ws',
      // Enable HMR
      overlay: true
    },
    // Clear caches on startup
    force: true
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  }
})
