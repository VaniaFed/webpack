module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'arrow-parens': 0,
    'no-param-reassign': 1,
    'implicit-arrow-linebreak': 1,
    'no-use-before-define': 0,
    'linebreak-style': 0,
    'prettier/prettier': 2,
    indent: [2, 4],
    quotes: [2, 'single'],
    'prettier/prettier': [2, { singleQuote: true }]
  }
};
