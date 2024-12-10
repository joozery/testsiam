import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ใช้สำหรับ deploy ใน subdirectory
  plugins: [react()],
})
