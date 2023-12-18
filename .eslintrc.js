module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.js', '.eslintrc.cjs'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'prettier',
    'simple-import-sort',
    'react-refresh',
  ],
  rules: {
    camelcase: ['error', { ignoreImports: true, allow: ['redirect_uri'] }],
    'no-duplicate-imports': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // 'no-console': 'warn',
    'no-alert': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 0,
    'react/display-name': 0,
    // 'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    'react/no-unknown-property': 'off',
    'react/no-unescaped-entities ': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
}
