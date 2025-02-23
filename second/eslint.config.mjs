import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      globals: globals.browser,
      parser: '@typescript-eslint/parser', // Добавляем парсер
    },
    plugins: ['@typescript-eslint'], // Добавляем плагин TypeScript
    extends: [
      'eslint:recommended', // Базовые правила ESLint
      'plugin:@typescript-eslint/recommended', // Рекомендованные правила TypeScript
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 2, // Запрещаем использование any (ошибка)
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
