module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'indent': 'off',
    'vue/no-textarea-mustache': 'off',
    'vue/no-multi-spaces': 'off',
    'space-before-function-paren': 'off',
    'space-before-blocks': 'off',
    'object-curly-spacing': 'off',
    'comma-spacing': 'off',
    'no-multiple-empty-lines': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
