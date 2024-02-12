/* function sum(a, b) {
  return a + b;
} */
//const sum = (a, b) => a + b;

/* function substract(a, b) {
  return a - b;
} */
/* const substract = (a, b) => a - b; */

const { sum, substract } = require("./math");

let result = sum(5, 5);
let expected = 10;
expect(result).toBe(expected);

/* if (result != expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  console.log(`All test passed`);
} */

result = substract(5, 4);
expected = 1;
expect(result).toBe(expected);

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
