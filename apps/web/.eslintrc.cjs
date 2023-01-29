module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['custom'],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'react/react-in-jsx-scope': 'off',
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
  },
}
