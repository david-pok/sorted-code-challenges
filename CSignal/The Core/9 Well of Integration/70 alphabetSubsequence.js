// Check whether the given string is a subsequence of the plaintext alphabet.

// Example

// For s = "effg", the output should be
// alphabetSubsequence(s) = false;
// For s = "cdce", the output should be
// alphabetSubsequence(s) = false;
// For s = "ace", the output should be
// alphabetSubsequence(s) = true;
// For s = "bxz", the output should be
// alphabetSubsequence(s) = true.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// Guaranteed constraints:
// 2 ≤ s.length ≤ 15.

// [output] boolean

// true if the given string is a subsequence of the alphabet, false otherwise.

function alphabetSubsequence(s) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let checker = -1;
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const wut = alphabet.indexOf(alphabet.find((x) => x == current));
    if (wut <= checker) return false;
    checker = wut;
  }
  return true;
}

//other answers
//sets dont allow duplicates, so if the string had a duplicate
//then it wouldnt come back the same after the sort then join
function alphabetSubsequence(s) {
  return s == [...new Set(s)].sort().join("");
}

function alphabetSubsequence(s) {
  return s.split("").sort().join("") == s && new Set(s).size == s.length;
}
