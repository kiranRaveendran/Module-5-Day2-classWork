import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Module-5-Day2-classWork/', // 👈 MUST match your GitHub repo name
  plugins: [react()],
})
