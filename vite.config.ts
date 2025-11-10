import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/omar-hussein-web-showcase/',
  server: {
    host: "0.0.0.0",
    port: 8080,
    hmr: {
      clientPort: 443,
    },
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && compression(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    cssCodeSplit: true,
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react': ['react', 'react-dom'],
        },
      },
    },
  },
}));
