// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
// After the algorithm has finished, there will be a single element left in the array. Return that element.

// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be
// arrayConversion(inputArray) = 186.

// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 27,
// -100 ≤ inputArray[i] ≤ 100.

// [output] integer

function arrayConversion(inputArray) {
  let iteration = 1;
  let input = inputArray.slice();

  while (input.length > 1) {
    if (iteration % 2 == 1) {
      for (let i = 0; i < input.length - 1; i++) {
        let sum = input[i] + input[i + 1];
        input = input.filter((elem, index) => index != i && index != i + 1);
        input.splice(i, 0, sum);
      }
      iteration++;
    }
    if (iteration % 2 == 0) {
      for (let i = 0; i < input.length - 1; i++) {
        let prod = input[i] * input[i + 1];
        input = input.filter((elem, index) => index != i && index != i + 1);
        input.splice(i, 0, prod);
      }
      iteration++;
    }
  }
  return input[0];
}
