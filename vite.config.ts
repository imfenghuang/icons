import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig(({ mode }) => {
  let config = {
    plugins: [
      vue(),
      vueDevTools(),
      Components({
        dirs: ['src/components'],
        include: [/\.vue$/, /\.vue\?vue/],
        extensions: ['vue'],
        dts: 'src/components.d.ts',
        excludeNames: [/\scopy/i],
      }),
      AutoImport({
        dirs: ['src/**/*'],
        // dirs: ['src/icons'],
        include: [
          /\.ts/,
          // /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          // /\.vue\?vue/, // .vue
        ],
        /* options */
        imports: ['vue'],
        dts: 'src/auto-imports.d.ts',
        viteOptimizeDeps: true,
        exclude: [/\.src\/components\/index\.ts/, /\scopy/i],
      }),
    ],
    server: {
      host: '0.0.0.0',
    },
  };
  // for pages
  if (mode === 'pages') {
    config = Object.assign({}, config, {
      build: {
        outDir: 'docs',
      },
      base: './',
    });
  }
  return config;
});
