// Given a string s containing just the
// characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

//my solution
var isValid = function (s) {
  if (s.length == 0 || s.length == 1 || s.length % 2 !== 0) return false;
  const stack = [];
  for (let char in s) {
    if (s[char] == "(") {
      stack.push(")");
      continue;
    }
    if (s[char] == "{") {
      stack.push("}");
      continue;
    }
    if (s[char] == "[") {
      stack.push("]");
      continue;
    }

    if (s[char] == ")" || s[char] == "}" || s[char] == "]") {
      const check = stack.pop();
      if (s[char] !== check) return false;
    }
  }
  return !stack.length;
};

//another solution using hash map
var isValid = function (s) {
  const stack = [];
  const complement = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (!complement[char]) stack.push(char);
    else if (stack.pop() !== complement[char]) return false;
  }
  return stack.length === 0;
};
