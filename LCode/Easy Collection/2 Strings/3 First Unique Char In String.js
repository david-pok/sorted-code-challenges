// Given a string s, return the first non-repeating
// character in it and return its index.
// If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

const firstUniqChar = function (s) {
  if (s.length == 1) return 0;
  let current = 0;
  let count = 1;
  while (current < s.length) {
    for (let i = 0; i < s.length; i++) {
      if (i == current) continue;
      if (s[current] == s[i]) count++;
      if (count > 1) break;
    }
    if (count == 1) return current;
    count = 1;
    current++;
  }
  return -1;
};

//other answers
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++)
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  return -1;
};

var firstUniqChar = function (s) {
  let map = {};

  for (let char of s) {
    map[char] ? map[char]++ : (map[char] = 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i;
  }

  return -1;
};
