// Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same as in the initial array.

// Example

// For

// inputArray = ["abc",
//               "",
//               "aaa",
//               "a",
//               "zz"]
// the output should be

// sortByLength(inputArray) = ["",
//                             "a",
//                             "zz",
//                             "abc",
//                             "aaa"]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array of strings.

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 100,
// 0 ≤ inputArray[i].length ≤ 100.

// [output] array.string

function sortByLength(inputArray) {
  //this is the one liner answer
  // return inputArray.sort((a, b) => a.length - b.length);

  //this is the long answer
  for (let i = 0; i < inputArray.length - 1; i++) {
    let current = inputArray[i];
    let next = inputArray[i + 1];
    if (current.length > next.length) {
      [inputArray[i], inputArray[i + 1]] = [inputArray[i + 1], inputArray[i]];
      if (i > 0) {
        for (let j = i; j > 0; j--) {
          let current2 = inputArray[j];
          let prev = inputArray[j - 1];
          if (current2.length < prev.length) {
            [inputArray[j], inputArray[j - 1]] = [
              inputArray[j - 1],
              inputArray[j],
            ];
          }
        }
      }
    }
  }
  return inputArray;
}
