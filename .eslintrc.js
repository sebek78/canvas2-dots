module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  plugins: [],
  extends: ["eslint:recommended"],
  settings: {},
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
    },
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn",
  },
};
