module.exports = {
  root: false,
  extends: ['node'],
  rules: {
    'no-console': 'error',
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
