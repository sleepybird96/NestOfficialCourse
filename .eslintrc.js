module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'spellcheck'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // Default
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // Custom
    '@typescript-eslint/no-floating-promises': 'off',
    'spellcheck/spell-checker': [
      1,
      {
        lang: 'en_US',
        skipWords: ['dict', 'utils'],
        skipIfMatch: ['http://[^s]*'],
        minLength: 3,
      },
    ],
  },
};
