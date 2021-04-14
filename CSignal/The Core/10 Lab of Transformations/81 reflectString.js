// Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

// Define a string reflection as the result of applying the alphabet reflection to each of its characters.

// Reflect the given string.

// Example

// For inputString = "name", the output should be
// reflectString(inputString) = "mznv".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string of lowercase characters.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 1000.

// [output] string

function reflectString(inputString) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphaMap = {};
  let answer = "";

  for (let i = 0; i < alphabet.length; i++) {
    alphaMap[alphabet[i]] = alphabet[25 - i];
  }
  for (let i = 0; i < inputString.length; i++) {
    answer += alphaMap[inputString[i]];
  }
  return answer;
}

//other answers
function reflectString(inputString) {
  return inputString
    .split("")
    .map((x) => String.fromCharCode(219 - x.charCodeAt(0)))
    .join("");
}

function reflectString(inputString) {
  x = "abcdefghijklmnopqrstuvwxyz";
  return inputString.split``.map((v) => x[25 - x.indexOf(v)]).join``;
}

function reflectString(inputString) {
  var ans = "";
  for (var i = 0; i < inputString.length; ++i) {
    ans =
      ans +
      String.fromCharCode(
        "a".charCodeAt(0) - inputString.charCodeAt(i) + "z".charCodeAt(0)
      );
  }
  return ans;
}
