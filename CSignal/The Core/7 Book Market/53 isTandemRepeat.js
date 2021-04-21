// Determine whether the given string can be obtained by one concatenation of some string to itself.

// Example

// For inputString = "tandemtandem", the output should be
// isTandemRepeat(inputString) = true;
// For inputString = "qqq", the output should be
// isTandemRepeat(inputString) = false;
// For inputString = "2w2ww", the output should be
// isTandemRepeat(inputString) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// Guaranteed constraints:
// 2 ≤ inputString.length ≤ 20.

// [output] boolean

// true if inputString represents a string concatenated to itself, false otherwise.

function isTandemRepeat(inputString) {
  let half = inputString.length / 2;
  for (let i = 0; i < half; i++) {
    if (inputString[i] !== inputString[i + half]) return false;
  }
  return true;
}

//other answers
function isTandemRepeat(inputString) {
  var middle = inputString.length / 2;
  return inputString.slice(0, middle) == inputString.slice(middle);
}

function isTandemRepeat(s) {
  return s.length % 2
    ? false
    : s.slice(0, s.length / 2) === s.slice(s.length / 2);
}
