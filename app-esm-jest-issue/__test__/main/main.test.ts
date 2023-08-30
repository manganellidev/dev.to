import main from "@App/main/main.js";

test("main", () => {
  expect(main.helloMsg("Alex")).toBe("Hello, Alex!");
});
