/* function sum(a, b) {
  return a + b;
} */
const sum = (a, b) => a + b;

/* function substract(a, b) {
  return a - b;
} */
const substract = (a, b) => a - b;

let result = sum(5, 5);
let expected = 10;

if (result != expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  console.log(`All test passed`);
}

result = substract(5, 4);
expected = 1;

if (result != expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  console.log(`All test passed`);
}
