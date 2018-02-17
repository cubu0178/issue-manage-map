module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "extends": ["eslint:recommended", 'plugin:react/recommended'],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "getter-return": "error",
    "class-methods-use-this": ["warn",
                               { "exceptMethods": ["render"]}],
    "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-array-constructor": "error",
    "no-nested-ternary": "warn",
    "no-tabs": "warn",
    "no-console": 0,
    "quotes": "warn",
    "jsx-quotes": ["warn", "prefer-double"],
    "semi": [
      "error",
      "always"
    ],
    "no-var": ["error"]
  }
};
