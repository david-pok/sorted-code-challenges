// Given a string s, determine if it is a palindrome,
// considering only alphanumeric characters and ignoring cases.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

const isPalindrome = function (s) {
  const check = [];
  const lowered = s.toLowerCase();
  for (let i = 0; i < lowered.length; i++) {
    if (
      (lowered.charCodeAt(i) > 96 && lowered.charCodeAt(i) < 123) ||
      (lowered.charCodeAt(i) > 47 && lowered.charCodeAt(i) < 58)
    ) {
      check.push(lowered[i]);
    }
  }
  const reversed = check.slice().reverse();
  for (let i = 0; i < check.length; i++) {
    if (check[i] != reversed[i]) return false;
  }
  return true;
};

//other answers
var isPalindrome = function (s) {
  var cleaned = s.replace(/\W/g, "");
  var reversedAndCleaned = cleaned.split("").reverse().join("");

  return cleaned.toLowerCase() == reversedAndCleaned.toLowerCase();
};

var isPalindrome = function (s) {
  if (s.length == 0) {
    return true;
  }

  const regex = /\W/gm;
  const cleaned = [...s.toLowerCase().replace(regex, "")];

  let i = 0;
  let j = cleaned.length - 1;

  while (i < j) {
    if (cleaned[i] != cleaned[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};
