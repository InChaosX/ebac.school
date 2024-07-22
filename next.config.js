// const withOptimizedImages = require("next-optimized-images");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   distDir: process.env.NEXT_BUILD_DIR || ".next", // Custom build directory
//   /* Other Next.js configurations */
// };

// module.exports = withOptimizedImages(nextConfig);
const withOptimizedImages = require("next-optimized-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeImages: false,
  distDir: process.env.NEXT_BUILD_DIR || ".next", // Custom build directory
  /* Other Next.js configurations */
  webpack: (config, { isServer }) => {
    // Extend default Webpack rules to handle JSON files
    config.module.rules.push({
      test: /\.json$/,
      loader: "json-loader",
      type: "javascript/auto", // Ensures correct handling of JSON files
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = withOptimizedImages(nextConfig);

