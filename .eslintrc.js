module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    // parser: 'babel-eslint'
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always"
      }
    }]
  }
}
