export default {
  preset: "ts-jest",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js",
    "@testing-library/jest-dom/extend-expect",
  ],
  collectCoverage: true,
  coverageProvider: "v8",
  coverageReporters: ["html", "text-summary"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/coverage/",
    "<rootDir>/src/main.tsx",
  ],
  collectCoverageFrom: ["src/**/*.tsx", "!src/main.tsx"],
};
