// Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

// Example

// For n = 9, the output should be
// isSumOfConsecutive2(n) = 2.

// There are two ways to represent n = 9: 2 + 3 + 4 = 9 and 4 + 5 = 9.

// For n = 8, the output should be
// isSumOfConsecutive2(n) = 0.

// There are no ways to represent n = 8.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive integer.

// Guaranteed constraints:
// 1 ≤ n ≤ 104.

// [output] integer

function isSumOfConsecutive2(n) {
  let total = 0;
  for (let i = 1; i < n; i++) {
    let count = i;
    for (let j = i + 1; j < n; j++) {
      count += j;
      if (count == n) {
        total += 1;
        break;
      }
      if (count > n) break;
    }
  }
  return total;
}

//other answers
function isSumOfConsecutive2(n) {
  c = 0; //counter
  l = 1; //smallest number to be added ('left')
  r = 2; //biggest number to be added ('right')
  s = 3; //sum of all numbers in range [l,r] (including l and r)

  while (1) {
    if (l == r) return c; // rangesize < 2 -> no more fitting ranges can be found -> return counter

    if (s == n) c++; // found a fitting range

    if (s <= n) s += ++r; // sum is too small: grow to right side

    if (s > n) s -= l++; // sum is too big: shrink from left side
  }
}

const isSumOfConsecutive2 = (n) => {
  let r = 0;

  for (let i = 3; i <= n; i += 2) {
    r += n % i === 0;
  }
  return r;
};
