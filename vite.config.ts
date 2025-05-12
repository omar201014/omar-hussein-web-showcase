
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/omar-hussein-web-showcase/', // Keep GitHub Pages base path
  server: {
    host: "::",
    port: 8080,
    hmr: {
      // Fix HMR connection issues
      clientPort: 443,
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Optimize build output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true, // Remove debugger statements
      },
    },
    // CSS optimization
    cssCodeSplit: true,
    // Generate manifest for better caching
    manifest: true,
    // Optimize size
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          lucide: ['lucide-react'],
          shadcn: ['@radix-ui/react-dialog', '@radix-ui/react-aspect-ratio'],
        },
      },
    },
  },
}));
