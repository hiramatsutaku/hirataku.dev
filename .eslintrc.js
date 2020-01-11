module.exports = {
  env: { node: true, browser: true },
  plugins: ['react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
