// Given two strings a and b, both consisting only of lowercase English letters, your task is to calculate how many strings equal to a can be constructed using only letters from the string b? Each letter can be used only once and in one string only.

// Example

// For a = "abc" and b = "abccba", the output should be stringsConstruction(a, b) = 2.

// We can construct 2 strings a = "abc" using only letters from the string b.

// For a = "ab" and b = "abcbcb", the output should be stringsConstruction(a, b) = 1.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string a

// String to construct, containing only lowercase English letters.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 105.

// [input] string b

// String containing needed letters, containing only lowercase English letters.

// Guaranteed constraints:
// 1 ≤ b.length ≤ 105.

// [output] integer

// The number of strings a that can be constructed from the string b.

function stringsConstruction(a, b) {
  //turn strings into arrays
  let aStr = a.split("");
  let bStr = b.split("");
  //keep counter of the possible strings
  let count = 0;
  //our pointer for a string
  let aPointer = 0;

  while (bStr.length > 0) {
    //use findIndex to find first instance of our match
    //returns -1 if no match
    let matcheeIndex = bStr.findIndex((elem) => elem == aStr[aPointer]);
    if (matcheeIndex == -1) break;
    //remove the matched element from the b string
    // bStr.splice(matcheeIndex, 1);
    //or we can just filter it instead
    bStr = bStr.filter((elem, aPointer) => aPointer !== matcheeIndex);
    //move on to next a string element
    aPointer++;
    //if we have reached the end of a string, we have 1 complete string counted
    //so then we increment our count and start the a pointer over
    if (aPointer == aStr.length) {
      aPointer = 0;
      count++;
    }
  }
  return count;
}

//my other answer
// function stringsConstruction(a, b) {
//   let count = 0;
//   let aArr = a.split("");
//   let bArr = b.split("");
//   let tempCount = 0;
//   let j = 0;

//   for (let i = 0; i < aArr.length; i++) {
//     while (j < bArr.length) {
//       if (aArr[i] == bArr[j]) {
//         bArr.splice(j, 1);
//         i++;
//         j = 0;
//         tempCount++;
//       } else j++;

//       if (tempCount == aArr.length) {
//         count++;
//         tempCount = 0;
//         i = 0;
//       }
//       if (bArr.length == 0) break;
//     }
//   }
//   return count;
// }

//cleaner answer
// function stringsConstruction(a, b) {
//   let count = 0;
//   while (true) {
//     for (let x of a) {
//       if (b.indexOf(x) < 0) return count;
//       b = b.replace(x, "");
//     }
//     count++;
//   }
// }
