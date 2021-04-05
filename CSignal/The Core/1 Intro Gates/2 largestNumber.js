// Given an integer n, return the largest number that contains exactly n digits.

// Example

// For n = 2, the output should be
// largestNumber(n) = 99.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 1 ≤ n ≤ 9.

// [output] integer

// The largest integer of length n.

function largestNumber(n) {
    let nines = [];
    for (let i = 0; i < n; i++) {
        nines.push(9);
    }
    return parseInt(nines.join(''));
}

// A CLEANER ANSWER
// function largestNumber(n) {
//     return Math.pow(10, n) - 1
// }

//ANOTHER CLEAN ANSWER
// function largestNumber(n) {
//     return Number('9'.repeat(n));
// }

console.log(largestNumber(2)); //99
console.log(largestNumber(1)); //9
console.log(largestNumber(7)); //9999999
console.log(largestNumber(4)); //9999