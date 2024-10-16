import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    // Brotli compression
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br", // File extension for Brotli
      threshold: 10240, // Compress files larger than 10 KB
      compressionOptions: {
        level: 11, // Maximum Brotli compression level
      },
      deleteOriginFile: false, // Keep original files for fallback
    }),
    // Gzip compression as backup
    viteCompression({
      algorithm: "gzip",
      ext: ".gz", // File extension for Gzip
      threshold: 10240, // Compress files larger than 10 KB
      deleteOriginFile: false, // Keep original files for fallback
    }),
  ],
});
