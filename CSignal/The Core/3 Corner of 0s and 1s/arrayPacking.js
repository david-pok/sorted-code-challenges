// You are given an array of up to four non-negative integers, each less than 256.

// Your task is to pack these integers into one number M in the following way:

// The first element of the array occupies the first 8 bits of M;
// The second element occupies next 8 bits, and so on.
// Return the obtained integer M.

// Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.

// Example

// For a = [24, 85, 0], the output should be
// arrayPacking(a) = 21784.

// An array [24, 85, 0] looks like [00011000, 01010101, 00000000] in binary.
// After packing these into one number we get 00000000 01010101 00011000 (spaces are placed for convenience), which equals to 21784.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// Guaranteed constraints:
// 1 ≤ a.length ≤ 4,
// 0 ≤ a[i] < 256.

// [output] integer

function arrayPacking(a) {
  //a exercise in closure
  //we create exerciseInClosure to return another function
  //this inner function has access to everything that
  //exerciseInClosure() has access to, including
  // "n" which is what is passed in
  // then it will all send back "0"s added to
  // IN FRONT of whatever else is passed in
  function exerciseInClosure(n) {
    return function padded(str) {
      return "0".repeat(n - str.length) + str;
    };
  }

  let pad8 = exerciseInClosure(8);

  //reverse our array elements
  //map over each element and make them binary (toString(2))
  //then we join them all together into 1 giant number
  let str = a
    .reverse()
    .map((x) => pad8(x.toString(2)))
    .join("");

  //then we convert that number back into a base 10 number
  return parseInt(str, 2);
}

//cleaner answers
// function arrayPacking(a) {
//   return a.reduce((value, byte, i) => value + byte * Math.pow(256, i));
// }

// function arrayPacking(a) {
//   ret = 0;
//   for (i = 0; i < a.length; i++) ret += a[i] << (8 * i);
//   return ret;
// }

// function arrayPacking(a) {
//   return a.reduce((x, y, i) => x + y * 256 ** i);
// }
