// Write a function that reverses a string.
// The input string is given as an array of characters s.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

// Follow up: Do not allocate extra space for another array.
// You must do this by modifying the input array in-place
// with O(1) extra memory.

// Hint #1
// The entire logic for reversing a string is
// based on using the opposite directional two-pointer approach!

const reverseString = function (s) {
  //easy answer
  // return s.reverse();

  //harder answer
  let end = s.length - 1;
  const half = Math.floor(s.length / 2);
  for (let i = 0; i < half; i++) {
    [s[i], s[end - i]] = [s[end - i], s[i]];
  }
  return s;
};

//other answers
var reverseString = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    // ES6 destructuring assignment
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};

var reverseString = (s) => {
  for (let [a, b] = [0, s.length - 1]; a < b; a++, b--) {
    [s[a], s[b]] = [s[b], s[a]];
  }
};

var reverseString = (s) => {
  reverse(0, s.length - 1);
  function reverse(i, j) {
    if (i >= j) return;
    [s[i], s[j]] = [s[j], s[i]];
    reverse(i + 1, j - 1);
  }
};

var reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++)
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
};
