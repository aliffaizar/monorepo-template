module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
  ],
  overrides: [
    {
      env: {
        jest: true,
      },
      extends: ['plugin:jest/recommended'],
      files: [
        '**/__tests__/**/*.ts',
        '**/?(*.)+(spec|test).ts',
        '**/test/**/*.ts',
      ],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint', 'prettier'],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
}
