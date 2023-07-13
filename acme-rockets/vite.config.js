import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ! "base": if you are deploy this on local, remove next line
  // base: "/ui_practice/acme-rockets/dist"
})
