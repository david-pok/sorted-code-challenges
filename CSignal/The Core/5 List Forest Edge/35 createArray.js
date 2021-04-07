// Given an integer size, return array of length size filled with 1s.

// Example

// For size = 4, the output should be
// createArray(size) = [1, 1, 1, 1].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer size

// A positive integer.

// Guaranteed constraints:
// 1 ≤ size ≤ 1000.

// [output] array.integer

function createArray(size) {
  let arr = new Array(size);
  return arr.fill(1);
}

//cleaner answer
// function createArray(size) {
//   return Array(size).fill(1);
// }
