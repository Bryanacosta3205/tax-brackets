import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@lib": "src/lib/",
      "@layouts": "src/layouts",
      "@styles": "src/styles",
    },
  },
})
