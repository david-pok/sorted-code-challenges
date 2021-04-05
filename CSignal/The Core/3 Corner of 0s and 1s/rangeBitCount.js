// You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

// Example

// For a = 2 and b = 7, the output should be
// rangeBitCount(a, b) = 11.

// Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer a

// Guaranteed constraints:
// 0 ≤ a ≤ b.

// [input] integer b

// Guaranteed constraints:
// a ≤ b ≤ 10.

// [output] integer

function rangeBitCount(a, b) {
  let count = 0;
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i.toString(2));
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == "1") {
        count++;
      }
    }
  }
  return count;
}

//cleaner answer
// function rangeBitCount(a, b) {
//   var packed = "";
//   while (a <= b) {
//     packed += a.toString(2);
//     a++;
//   }
//   return packed.split("1").length - 1;
// }
