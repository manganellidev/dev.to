import { jest } from "@jest/globals";

jest.unstable_mockModule("@App/main/main", () => ({
  default: jest.fn().mockImplementation(() => "Hello, Mock!"),
  namedExport: jest.fn().mockImplementation(() => "Hello, Mock namedExport!"),
}));

const main = await import("@App/main/main");

test("main", async () => {
  await import("@App/index");
  expect(main.default).toHaveBeenCalled();
  expect(main.namedExport).toHaveBeenCalled();
});
