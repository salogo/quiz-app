const {resolve} = require("path");

module.exports = {
  webpack: {
    alias: {
      '@': resolve(__dirname, 'src/'),
      '@Containers': resolve(__dirname, 'src/containers'),
      '@Components': resolve(__dirname, 'src/components/'),
      '@Layouts': resolve(__dirname, 'src/components/Layouts'),
      '@Pages': resolve(__dirname, 'src/pages/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@Containers/(.*)$': '<rootDir>/src/containers/$1',
        '^@Components/(.*)$': '<rootDir>/src/components/$1',
        '^@Layouts/(.*)$': '<rootDir>/src/components/Layouts/$1',
        '^@Pages/(.*)$': '<rootDir>/src/pages/$1',
      },
    },
  },
};
