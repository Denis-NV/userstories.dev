/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2024: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'turbo',
  ],
  ignorePatterns: ['node_modules', 'dist', '.eslintrc.js', '.eslintrc.cjs', '**/*.css'],
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
    'turbo',
    'import',
  ],
  rules: {
    // camelcase: ['error', { ignoreImports: true, allow: ['redirect_uri'] }],
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
    'turbo/no-undeclared-env-vars': [
      'error',
      { allowList: ['NHOST_SECRET', 'HASURA_GRAPHQL_ADMIN_SECRET'] },
    ],
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/export': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json', 'libs/**/tsconfig.json', 'apps/**/tsconfig.json'],
      },
    },
  },
}
