const withFonts = require('nextjs-fonts');
const withImages = require('next-images');

const path = require('path');

module.exports = withImages(
  withFonts({
    sassOptions: {
      cssModules: true,
      includePaths: ['./src'],
    },
    images: {
      disableStaticImages: true
    },
    pageExtensions: ['page.tsx'],
    fileExtensions: ['jpg', 'jpeg', 'png', 'webp'],
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
    env: {
      STAGE: process.env.STAGE,
    },
  })
);