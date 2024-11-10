import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig(({ mode }) => {
  let config = {
    plugins: [
      vue(),
      Components({
        dirs: ['src/components'],
        include: [/\.vue$/, /\.vue\?vue/],
        extensions: ['vue'],
        dts: 'src/components.d.ts',
        excludeNames: [/\scopy/],
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
