'use strict';

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/test'],
    testMatch: ['**/*.test.ts'],
    globals: {
        'ts-jest': {
            isolatedModules: true
        }
    },
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    }
}