import add from "./sum.js";

describe("sum.js", function () {
  test("add two number", function () {
    expect(add(1, 2)).toBe(3);
  });
});
