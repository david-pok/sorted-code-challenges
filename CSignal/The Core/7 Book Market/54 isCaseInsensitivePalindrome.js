// Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

// Example

// For inputString = "AaBaa", the output should be
// isCaseInsensitivePalindrome(inputString) = true.

// "aabaa" is a palindrome as well as "AABAA", "aaBaa", etc.

// For inputString = "abac", the output should be
// isCaseInsensitivePalindrome(inputString) = false.

// All the strings which can be obtained via changing case of some group of letters, i.e. "abac", "Abac", "aBAc" and 13 more, are not palindromes.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// Non-empty string consisting of English letters.

// Guaranteed constraints:
// 4 ≤ inputString.length ≤ 10.

// [output] boolean

function isCaseInsensitivePalindrome(inputString) {
  const lowered = inputString.toLowerCase();

  for (let i = 0; i < lowered.length; i++) {
    const len = lowered.length - 1;
    if (lowered[i] != lowered[len - i]) {
      return false;
    }
  }
  return true;
}

//other answers
function isCaseInsensitivePalindrome(inputString) {
  r = inputString.split("").reverse().join("");
  return inputString.toLowerCase() == r.toLowerCase();
}

function isCaseInsensitivePalindrome(inputString) {
  inputString = inputString.toLowerCase();
  let i, mid;
  for (i = 0, mid = Math.floor(inputString.length / 2); i < mid; i++) {
    if (inputString[i] != inputString[inputString.length - 1 - i]) return false;
  }
  return true;
}
