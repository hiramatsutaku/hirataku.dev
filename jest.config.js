module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx)'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: './tsconfig.test.json',
      babelConfig: './.jest/babel.config.json',
    },
  },
  setupFiles: ['<rootDir>/.jest/register-context.ts'],
};
