import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (dudamedeiros.com.br) is served from the site root, so base is '/'.
// If you ever deploy WITHOUT a custom domain (e.g. username.github.io/dudamedeiros/),
// change base to '/dudamedeiros/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
