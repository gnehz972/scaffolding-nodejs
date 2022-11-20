import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: "node",
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  testTimeout: 10000,
  testMatch: ["**/__tests__/**/*.[t]s?(x)"],
  collectCoverageFrom: ["src/**/*.ts", "!src/route/*.ts", "!src/app/model/*.ts"],
  setupFiles: ["dotenv/config"],
  transform: {
    "\\.[jt]sx?$": "@swc/jest",
  },
};

export default config;
