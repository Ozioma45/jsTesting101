/* function sum(a, b) {
  return a + b;
} */
//const sum = (a, b) => a + b;

/* function substract(a, b) {
  return a - b;
} */
/* const substract = (a, b) => a - b; */

const { sum, substract, sumAsync, substractAsync } = require("./math");

/* function sumTest() {
  const result = sum(5, 5);
  const expected = 10;
  expect(result).toBe(expected);
}

test("Adds two Number", sumTest); */

//for shortcut
/* test("Add two Number", () => {
  const result = sum(5, 5);
  const expected = 10;
  expect(result).toBe(expected);
}); */

/* if (result != expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  console.log(`All test passed`);
} */

async function test(title, callback) {
  try {
    await callback();
    console.log("success", title);
  } catch (e) {
    console.log("error", title);
    console.error(e);
  }
}

/* function subtractTest() {
  const result = substract(5, 4);
  const expected = 1;
  expect(result).toBe(expected);
}

test("Subtracts two numbers", subtractTest); */

//for shortcut
/* test("Subtract two number", () => {
  const result = substract(5, 4);
  const expected = 1;
  expect(result).toBe(expected);
}); */
test("Subtract two number", async () => {
  const result = await sumAsync(5, 4);
  const expected = 9;
  expect(result).toBe(expected);
});
test("Subtract two number", async () => {
  const result = await substractAsync(5, 4);
  const expected = 1;
  expect(result).toBe(expected);
});

/* if (result != expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  console.log(`All test passed`);
} */

function expect(actual) {
  return {
    toBe(expected) {
      if (actual != expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      } else {
        console.log("Test Passed");
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {},
  };
}
