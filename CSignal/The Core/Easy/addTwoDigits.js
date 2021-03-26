// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be
// addTwoDigits(n) = 11.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive two-digit integer.

// Guaranteed constraints:
// 10 ≤ n ≤ 99.

// [output] integer

// The sum of the first and second digits of the input number.

function addTwoDigits(n) {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  //turn number into a string so that we can
  //split up each element into in array
  //then we map over it to turn each back into a number
  //then we reduce to accumulate all the values
}

console.log(addTwoDigits(29)); // returns 11
console.log(addTwoDigits(48)); // returns 12
console.log(addTwoDigits(10)); // returns 1
console.log(addTwoDigits(44)); // returns 8
console.log(addTwoDigits(50)); // returns 5
