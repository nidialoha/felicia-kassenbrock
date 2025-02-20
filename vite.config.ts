import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@skills': path.resolve(__dirname, './src/components/skills'),
      '@timeline': path.resolve(__dirname, './src/components/timeline')
    }
  },

  // Optimierung für die Entwicklung
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'lucide-react'
    ]
  },

  // Server-Konfiguration
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    fs: {
      strict: true,
      allow: ['..']
    }
  },

  // Build-Konfiguration
  build: {
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['lucide-react']
        }
      }
    }
  }
})