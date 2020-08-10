module.exports = {
  env: {
    commonjs: true,
    es6: true,
    es2020: true,
    node: true,
    mocha: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': [
      'error',
      {
        useTab: false,
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        printWidth: 120,
      },
    ],
  },
};
