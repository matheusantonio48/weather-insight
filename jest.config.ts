import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.(js|ts)(x)?', '!**/node_modules/**', '!**/designSystem/**'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura', 'lcov'],
  // coverageThreshold: {
  // global: {
  //lines: 85,
  // statements: 30,
  // branches: 0,
  // functions: 30,
  // lines: 30,
  // },
  // },
  globals: {
    window: {
      location: {},
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/src/app/api/auth/'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!string-width).+\\.js$'],
  verbose: true,
};

export default createJestConfig(config);
