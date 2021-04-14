// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.

// [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.

function allLongestStrings(inputArray) {
  let longest = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longest) {
      longest = inputArray[i].length;
    }
  }
  return inputArray.filter((val) => val.length == longest);
}

//other answers
function allLongestStrings(inputArray) {
  l = Math.max(...inputArray.map((x) => x.length));

  return inputArray.filter((x) => x.length == l);
}

allLongestStrings = (arr) => {
  let tempArr = [];
  for (i in arr) {
    tempArr.push(arr[i].length);
  }
  let max = Math.max(...tempArr);
  tempArr = [];
  for (j in arr) {
    if (arr[j].length === max) tempArr.push(arr[j]);
  }
  return tempArr;
};

function allLongestStrings(inputArray) {
  return inputArray.filter(
    (x) => x.length === Math.max(...inputArray.map((x) => x.length))
  );
}

function allLongestStrings(s) {
  b = [];
  s = s.sort((a, b) => b.length - a.length);
  s.map((a) => (a.length == s[0].length ? b.push(a) : 1));
  return b;
}
