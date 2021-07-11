// Given a signed 32-bit integer x, return x
// with its digits reversed. If reversing x
// causes the value to go outside the signed
// 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store
// 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

// Constraints:

// -231 <= x <= 231 - 1

//first turn the int into a string
//split it up into an array
//we split so that we can easily reverse
//then join it back together
//then we parseFloat it(turn it into a floating point number)
//which removes any floating zeros or trailing minus signs
//we check to make sure it's less than 32 bits(2**31)
//then we multiply the answer by its original sign
//this will get the original sign on it
const reverse = function (x) {
  const ans = parseFloat(x.toString().split("").reverse().join(""));
  if (ans > 2 ** 31) return 0;
  else return ans * Math.sign(x);
};

//other answers
function reverse(x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  let ret = 0;
  while (x > 0) {
    const num = x % 10;
    x = Math.floor(x / 10);
    ret *= 10;
    ret += num;
  }
  if (ret > Math.pow(2, 31)) return 0;
  return isNegative ? ret * -1 : ret;
}

var reverse = function (x) {
  const absReversed = Math.abs(x).toString().split("").reverse().join("");
  if (absReversed > 2 ** 31) return 0;
  return absReversed * Math.sign(x);
};
