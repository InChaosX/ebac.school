const withOptimizedImages = require("next-optimized-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_BUILD_DIR || ".next", // Custom build directory
  /* Other Next.js configurations */
};

module.exports = withOptimizedImages(nextConfig);
