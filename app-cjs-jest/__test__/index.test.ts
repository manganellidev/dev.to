import { jest } from "@jest/globals";

import main from "@App/main/main";
import { run } from "@App/index";

test("index test", async () => {
  const mockHelloMsg = jest.spyOn(main, "helloMsg").mockReturnValue("t");
  const mockNamedExport = jest.spyOn(main, "namedExport").mockReturnValue("m");

  run();
  expect(mockHelloMsg).toBeCalledWith("Alex");
  expect(mockHelloMsg).toHaveBeenCalled();
  expect(mockNamedExport).toHaveBeenCalled();
});
