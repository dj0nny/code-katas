module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-console": "off",
    "no-plusplus": "off",
    "prefer-template": "off",
    "no-nested-ternary": "off",
    "max-len": "off",
    "no-extend-native": "off",
    "func-names": "off",
    "no-param-reassign": "off"
  },
};
