// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignore patterns for generated files and build artifacts
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.mjs',
      'public/**',
      '.storybook/**',
      'storybook-static/**',
    ],
  },
  
  // Base configuration
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  
  // Storybook configuration
  ...storybook.configs['flat/recommended'],
  
  // Custom rules configuration
  {
    rules: {
      // Disable problematic rules for TypeScript/Next.js projects
      '@typescript-eslint/no-unused-expressions': [
        'warn',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': true,
          'ts-check': false,
        },
      ],
      
      // React/Next.js specific rules
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
      
      // General JavaScript rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'warn',
    },
  },
  
  // Specific overrides for different file types
  {
    files: ['**/*.stories.@(js|jsx|ts|tsx)'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'react/display-name': 'off',
    },
  },
  
  // Configuration files
  {
    files: ['*.config.{js,mjs,ts}', '.eslintrc.{js,mjs}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];

export default eslintConfig;
