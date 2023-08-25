import helloMsg from "../../src/main/main";

test("main", () => {
  expect(helloMsg("Alex")).toBe("Hello, Alex!");
});
