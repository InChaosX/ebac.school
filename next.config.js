// next.config.js
const nextConfig = {
  // other configurations
  webpack(config, { dev }) {
    if (!dev) {
      // Disable CSS minification in production
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (plugin) => !(plugin.constructor.name === "CssMinimizerPlugin")
      );
    }
    return config;
  },
};

module.exports = nextConfig;

// const withOptimizedImages = require("next-optimized-images");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   optimizeImages: false,
//   distDir: process.env.NEXT_BUILD_DIR || ".next", // Custom build directory
//   /* Other Next.js configurations */
//   webpack: (config, { isServer }) => {
//     // Extend default Webpack rules to handle JSON files
//     config.module.rules.push({
//       test: /\.json$/,
//       loader: "json-loader",
//       type: "javascript/auto", // Ensures correct handling of JSON files
//     });

//     // Important: return the modified config
//     return config;
//   },
// };

// module.exports = withOptimizedImages(nextConfig);
