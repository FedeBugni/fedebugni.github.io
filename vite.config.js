import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  assetsInclude: ['**/*.mp4'], // Assicura che i file MP4 siano gestiti come asset
  build: {
    outDir: 'dist',
    // Assicurati che i file nella cartella public vengano copiati
    copyPublicDir: true
  }

})
