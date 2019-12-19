const {resolve} = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": resolve(__dirname, "src/"),
      "@Components": resolve(__dirname, "src/components/"),
      "@Layouts": resolve(__dirname, "src/components/Layouts"),
      "@Routes": resolve(__dirname, "src/routes/"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@(.*)$": "<rootDir>/src$1",
        "^@Components/(.*)$": "<rootDir>/src/components/$1",
        "^@Layouts/(.*)$": "<rootDir>/src/components/Layouts/$1",
        "^@Routes/(.*)$": "<rootDir>/src/routes/$1",
      },
    },
  },
};
