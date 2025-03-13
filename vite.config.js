import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["3aaf-2405-201-2007-e8a1-4dd2-584c-2581-9b93.ngrok-free.app"]
  }
})
