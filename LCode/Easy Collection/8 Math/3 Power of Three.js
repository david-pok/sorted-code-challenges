// Given an integer n, return true if it is a power of three. 
// Otherwise, return false.

// An integer n is a power of three, if there exists an 
// integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true

// Example 2:

// Input: n = 0
// Output: false

// Example 3:

// Input: n = 9
// Output: true

// Example 4:

// Input: n = 45
// Output: false
 

// Constraints:

// -231 <= n <= 231 - 1
 

// Follow up: Could you solve it without loops/recursion?

const isPowerOfThree = function(n) {
    if (n == 0) return false;
    if (n > 3 && n % 3 !== 0) return false;
    
    for (let i = 1; i < 2147483648; i *= 3) {
        if (i == n) return true;
        if (i > n) return false;
    }
};