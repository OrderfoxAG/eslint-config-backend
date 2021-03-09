module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ].map(require.resolve),
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module',
      allowImportExportEverywhere: false,
      codeFrame: true,
    },
    ecmaVersion: 2020,
  },
  rules: {
    radix: 'off',
    eqeqeq: 'error',
    strict: 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'import/no-dynamic-require': 0,
    'linebreak-style': 0,
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 'off',
    'no-param-reassign': 'off',
    'import/newline-after-import': 'off',
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'no-prototype-builtins': 'off',
    'operator-assignment': 'off',
    'no-useless-constructor': 'off',
    'no-buffer-constructor': 'off',
    'no-use-before-define': 'off',
    'arrow-body-style': 'off',
    'no-mixed-operators': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      {
        js: 'always',
      },
    ],
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        argsIgnorePattern: '^_.+$|utils',
      },
    ],
    'no-empty-function': [
      'error',
      {
        allow: [
          'constructors',
          'arrowFunctions',
        ],
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'max-len': [
      'warn',
      {
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2,
        code: 160,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.spec.js',
        ],
      },
    ],
  },
};