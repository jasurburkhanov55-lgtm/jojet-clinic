import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'
export default defineConfig({
  plugins: [react()],
  base: '/jojet-clinic/',  // 
})
// https://vite.dev/config/
export default defineConfig({
  base: '/jojet-clinic/',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
