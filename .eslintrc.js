module.exports = {
  "env": {
  "browser": true,
      "node": true
},
  "extends": [
  "airbnb",
  "airbnb/hooks",
  "prettier"
],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
  "sourceType": "module",
      "allowImportExportEveryWhere": false,
      "ecmaFeatures": {
    "globalReturn": false,
        "jsx": true
  },
  "ecmaVersion": 2020,
      "babelOptions": {
    "configFile": "./babel.config.js"
  }
},
  "plugins": [
  "jsx-a11y",
  "react-hooks",
  "@babel/",
  "flowtype",
  "import"
],
    "rules": {
  "import/no-anonymous-default-export": "off",
      "import/no-extraneous-dependencies": "off",
      "import/order": [
    "error",
    {
      "groups": [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling"
      ],
      "newlines-between": "always",
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": false
      }
    }
  ],
      "import/prefer-default-export": "off",
      "indent": [
    "error",
    2,
    {
      "SwitchCase": 1
    }
  ],
      "jsx-a11y/anchor-is-valid": "off",
      "no-console": "error",
      "no-unused-vars": "error",
      "react/jsx-props-no-spreading": "off",
      "react/react-in-jsx-scope": "off"
},
  "settings": {
  "import/resolver": {
    "typescript": {}
  },
  "insert_final_newline": true
}
}
