import { jest } from "@jest/globals";

jest.unstable_mockModule("@App/main/main.js", () => ({
  default: {
    helloMsg: jest.fn().mockImplementation(() => "Hello, Mock!"),
    namedExport: jest.fn().mockImplementation(() => "Hello, Mock namedExport!"),
  },
}));

const main = (await import("@App/main/main.js")).default;
const run = (await import("@App/index.js")).run;

test("main", async () => {
  run();
  expect(main.helloMsg).toBeCalledWith("Alex");
  expect(main.helloMsg).toHaveBeenCalled();
  expect(main.namedExport).toHaveBeenCalled();
});
