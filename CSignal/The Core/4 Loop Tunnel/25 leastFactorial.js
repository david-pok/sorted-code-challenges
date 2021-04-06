// Given an integer n, find the minimal k such that

// k = m! (where m! = 1 * 2 * ... * m) for some integer m;
// k >= n.
// In other words, find the smallest factorial which is not less than n.

// Example

// For n = 17, the output should be
// leastFactorial(n) = 24.

// 17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive integer.

// Guaranteed constraints:
// 1 ≤ n ≤ 120.

// [output] integer

function leastFactorial(n) {
  //this will find us the factorials of the given number
  function factorials(num) {
    if (num > 1) {
      return num * factorials(num - 1);
    } else return 1;
    //1 liner version of this function
    // return num > 1 ? num * factorial(num - 1) : 1;
  }

  for (let i = 1; ; i++) {
    const fac = factorials(i);
    if (fac >= n) return fac;
  }
}

//input 17, output 24
//input 1, output 1
//input 5, output 6
//input 25, output 120

//other answers
//because of the way factorials look eg:
// 1! = 1
// 2! = 2 x 1
// 3! = 3 x 2 x 1
// 4! = 4 x 3 x 2 x 1
//we can store previous factorials within a variable (k)
// function leastFactorial(n) {
//   let k = 1;

//   for (let m = 1; ; m++) {
//     k *= m;
//     if (k >= n) return k;
//   }
// }

//because in this problem the constraint will never be above 120
//we can hard code our factorials
// function leastFactorial(n) {
//   let factorials = [1, 2, 6, 24, 120];
//   return factorials.find((k) => k >= n);
// }
