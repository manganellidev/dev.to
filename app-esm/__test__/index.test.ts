import { jest } from "@jest/globals";

jest.unstable_mockModule("../src/main/main", () => ({
  default: jest.fn().mockImplementation(() => "Hello, Mock!"),
  namedExport: jest.fn().mockImplementation(() => "Hello, Mock namedExport!"),
}));

const index = await import("../src/index");
const main = await import("../src/main/main");

test("main", () => {
  index.run();
  expect(main.default).toHaveBeenCalled();
  expect(main.namedExport).toHaveBeenCalled();
});
