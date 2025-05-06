import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
// import { ViteMinifyPlugin } from 'vite-plugin-minify';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    VitePluginSvgSpritemap('source/img/sprite/*.svg', {
      styles: false,
      injectSVGOnDev: true,
    }),
    // input https://www.npmjs.com/package/html-minifier-terser options
    // ViteMinifyPlugin({}),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg)$/i,
      includePublic: false,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                convertPathData: {
                  floatPrecision: 2,
                  forceAbsolutePath: false,
                  utilizeAbsolute: false,
                },
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                cleanupIds: false,
              },
            },
          },
          'removeDimensions',
        ],
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
        palette: true
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      // Cache assets in cacheLocation. When enabled, reads and writes asset files with their hash suffix from the specified path.
      cache: true,
      cacheLocation: './.cache',
    }),
  ],
  root: './source',
  publicDir: 'public',
  base: '/accelerator-project-2/',
  build: {
    outDir: '../dist', // ВАЖНО: две точки, чтобы выйти из source/
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|webp|svg|woff2?|ttf|otf|eot)$/i.test(assetInfo.name)) {
            return 'assets/[name][extname]'; // без хеша
          }
          return 'assets/[name]-[hash][extname]'; // остальные с хешем
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
};
