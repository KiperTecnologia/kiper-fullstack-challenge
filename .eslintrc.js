module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'import'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-curly-newline': 'off',
    'react/no-array-index-key': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        semi: true,
        bracketSpacing: true,
      },
    ],
  },
};
