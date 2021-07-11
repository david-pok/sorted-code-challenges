// Implement strStr().

// Return the index of the first occurrence of
// needle in haystack, or -1 if needle is not
// part of haystack.

// Clarification:

// What should we return when needle is an empty
// string? This is a great question to ask during
// an interview.

// For the purpose of this problem, we will
// return 0 when needle is an empty string.
// This is consistent to C's strstr() and Java's
// indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0

// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of
// only lower-case English characters.

const strStr = function (haystack, needle) {
  if (needle.length == 0) return 0;
  if (haystack.length < needle.length) return -1;
  if (haystack.length == 1 && needle.length == 1) {
    if (haystack[0] == needle[0]) return 0;
  }

  let match = false;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] == needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          match = false;
          break;
        }
        match = true;
      }
      if (match) return i;
    }
  }
  return -1;
};

//other answers
var strStr = function (haystack, needle) {
  var needleLength = needle.length;

  if (needle === "" && haystack === "") {
    return 0;
  }

  for (var i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, needleLength) === needle) {
      return i;
    }
  }
  return -1;
};

var strStr = function (haystack, needle) {
  if (!needle.length) return 0;
  for (let i in haystack)
    if (
      haystack[i] === needle[0] &&
      haystack.substring(i, Number(i) + needle.length) === needle
    )
      return i;
  return -1;
};

var strStr = function (haystack, needle) {
  if (!needle.length) return 0;
  if (needle.length > haystack.length) return -1;

  let i = 0; //haystackPointer
  let j = 0; //needlePointer
  let p = 0; //needlePointer

  while (i <= haystack.length - needle.length && j !== needle.length) {
    if (haystack[i] !== needle[j]) i++;
    else {
      p = i;
      while (haystack[i] === needle[j] && j < needle.length) {
        i++;
        j++;
      }
      if (j !== needle.length) {
        i = p + 1;
        j = 0;
      }
    }
  }

  return j === needle.length ? p : -1;
};
