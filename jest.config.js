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
    },
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/preload-dynamic-imports.ts'],
};
