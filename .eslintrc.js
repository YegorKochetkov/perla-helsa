module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    "no-unused-vars": "off",
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
      "sourceType": "module"
  }
}
