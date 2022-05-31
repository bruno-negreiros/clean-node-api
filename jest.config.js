/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  // collectCoverage: true,
  // coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**', '!<rootDir>/src/**/*-protocols.ts', '!**/protocols/**', '!**/test/**'],
  coverageProvider: 'babel',
  preset: '@shelf/jest-mongodb'
}
