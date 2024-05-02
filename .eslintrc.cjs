/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    '@vue/eslint-config-typescript',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/attributes-order': 'off',
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always',
    }],
    'max-depth': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-unused-vars': 'error',
    'vue/no-v-html': 0
  },
  overrides: [
    {
      files: ['*.spec.ts'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
}
