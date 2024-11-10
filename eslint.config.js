import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  includeIgnoreFile(gitignorePath),
  {
    rules: {
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: ['ts', 'js'],
          },
        },
      ],
      'vue/no-parsing-error': [2, { 'x-invalid-namespace': false }],
    },
  },
  {
    ignores: ['docs/**/*'],
  },
];
