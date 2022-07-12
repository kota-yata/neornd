module.exports = {
  env: {
    es6: true,
    es2020: true,
    node: true,
    mocha: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        printWidth: 120,
      },
    ],
  },
};
