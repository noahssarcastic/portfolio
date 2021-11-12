module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
  },
  plugins: ['@typescript-eslint'],
  rules: {},
}
