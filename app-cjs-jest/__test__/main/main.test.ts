import main from "@App/main/main";

test("main", () => {
  expect(main.helloMsg("Alex")).toBe("Hello, Alex!");
});
