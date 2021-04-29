// Given two arrays of integers a and b, obtain the array formed by the elements of a followed by the elements of b.

// Example

// For a = [2, 2, 1] and b = [10, 11], the output should be
// concatenateArrays(a, b) = [2, 2, 1, 10, 11].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// Guaranteed constraints:
// 1 ≤ a.length ≤ 10,
// 1 ≤ a[i] ≤ 15.

// [input] array.integer b

// Guaranteed constraints:
// 0 ≤ b.length ≤ 10,
// 1 ≤ b[i] ≤ 15.

// [output] array.integer

function concatenateArrays(a, b) {
  // return a.concat(b);
  //one liner answer

  let ans = [];
  for (let i = 0; i < a.length; i++) {
    ans.push(a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    ans.push(b[i]);
  }

  return ans;
}

//other answers
function concatenateArrays(a, b) {
  return [...a, ...b];
}
