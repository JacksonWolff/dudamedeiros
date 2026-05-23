import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the same build works at the custom domain root AND the
// GitHub Pages subpath (jacksonwolff.github.io/dudamedeiros/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
