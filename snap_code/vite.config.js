import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // for local run comment next line
    base: "/ui_practice/snap-code/dist",
})
