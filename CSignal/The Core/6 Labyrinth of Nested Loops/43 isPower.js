// Determine if the given number is a power of some non-negative integer.

// Example

// For n = 125, the output should be
// isPower(n) = true;
// For n = 72, the output should be
// isPower(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive integer.

// Guaranteed constraints:
// 1 ≤ n ≤ 400.

// [output] boolean

// true if n can be represented in the form ab (a to the power of b) where a and b are some non-negative integers and b ≥ 2, false otherwise.

function isPower(n) {
  if (n == 1) return true;
  for (let a = 2; a <= n; a++) {
    for (let b = 2; b <= n; b++) {
      const power = a ** b;
      if (power == n) return true;
      if (power > 400) break;
    }
  }
  return false;
}
