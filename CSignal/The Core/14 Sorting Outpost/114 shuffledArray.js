// A noob programmer was given two simple tasks: sum and sort the elements of the given array
// a = [a1, a2, ..., an]. He started with summing and did it easily, but decided to store the sum he found in some random position of the original array which was a bad idea. Now he needs to cope with the second task, sorting the original array a, and it's giving him trouble since he modified it.

// Given the array shuffled, consisting of elements a1, a2, ..., an, a1 + a2 + ... + an in random order, return the sorted array of original elements a1, a2, ..., an.

// Example

// For shuffled = [1, 12, 3, 6, 2], the output should be
// shuffledArray(shuffled) = [1, 2, 3, 6].

// 1 + 3 + 6 + 2 = 12, which means that 1, 3, 6 and 2 are original elements of the array.

// For shuffled = [1, -3, -5, 7, 2], the output should be
// shuffledArray(shuffled) = [-5, -3, 2, 7].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer shuffled

// Array of at least two integers. It is guaranteed that there is an index i such that shuffled[i] = shuffled[0] + ... + shuffled[i - 1] + shuffled[i + 1] + ... + shuffled[n].

// Guaranteed constraints:
// 2 ≤ shuffled.length ≤ 104,
// -5 · 104 ≤ shuffled[i] ≤ 5 · 104.

// [output] array.integer

// A sorted array of shuffled.length - 1 elements.

function shuffledArray(shuffled) {
  const shuf = shuffled.slice();
  for (let i = 0; i < shuf.length; i++) {
    const tempRem = shuf.splice(i, 1);
    let sum = 0;
    for (let j = 0; j < shuf.length; j++) {
      sum += shuf[j];
    }
    if (sum == tempRem) {
      shuf.sort((a, b) => a - b);
      return shuf;
    }
    shuf.splice(i, 0, tempRem[0]);
  }
}

//cleaner answer
// function shuffledArray(shuffled) {
//   //add up all the array elements and divide by two
//   //because all the elements in the array add up to one of the elements
//   //we should have double the value of the element within our accumulation
//   //so we divide that total by two to see what our sum should be
//   const sumValue = shuffled.reduce((a, b) => a + b) / 2;
//   //find the index of that value we have found above
//   const index = shuffled.indexOf(sumValue);
//   //make a copy of our original array so we can mutate it safely
//   const newArray = shuffled.slice();
//   //remove that value we found above by its index we found above
//   newArray.splice(index, 1);
//   //return the array with that value removed but sorted
//   return newArray.sort((a, b) => a - b);
// }
