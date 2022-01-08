module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/lib/'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 70,
      lines: 80,
      functions: 79,
    },
  },
};
