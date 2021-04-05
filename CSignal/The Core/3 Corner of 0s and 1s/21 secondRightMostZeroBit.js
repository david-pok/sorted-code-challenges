// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

// Return the value of 2position_of_the_found_bit.

// Example

// For n = 37, the output should be
// secondRightmostZeroBit(n) = 8.

// 3710 = 1001012. The second rightmost zero bit is at position 3 (0-based) from the right in the binary representation of n.
// Thus, the answer is 23 = 8.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 4 ≤ n ≤ 230.

// [output] integer

//regex below is looking for a 0 with any amount of 1s after
//and then another 0 with any amount of 1s again
//then the end of the string ($)
function secondRightmostZeroBit(n) {
  return 2 ** (n.toString(2).match(/01*01*$/)[0].length - 1);
}

//other answers
// function secondRightmostZeroBit(n) {
//   return ~(n |= -~n) & -~n;
// }

// function secondRightmostZeroBit(n) {
//   return Math.pow(
//     2,
//     n.toString(2).split("").reverse().join("").split("0", 2).join("0").length
//   );
// }

// function secondRightmostZeroBit(n) {
//   return ~(n | (n + 1)) & ((n | (n + 1)) + 1);
// }
