module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:svelte/recommended',
    'plugin:svelte/prettier',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.svelte'],
  },
  overrides: [
    {
      files: ['./*.js', './*.cjs'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'import/no-mutable-exports': 'off',
        'import/no-unresolved': 'off',
        'prefer-const': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-throw-literal': 'off',
    'import/extensions': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [],
        pathGroupsExcludedImportTypes: ['builtin', 'object'],
      },
    ],
  },
};
