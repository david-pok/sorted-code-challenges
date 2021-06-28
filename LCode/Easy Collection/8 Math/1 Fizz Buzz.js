// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output:
// ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Constraints:

// 1 <= n <= 104

const fizzBuzz = function (n) {
  let ans = [];

  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      ans.push("FizzBuzz");
    } else if (i % 3 == 0) {
      ans.push("Fizz");
    } else if (i % 5 == 0) {
      ans.push("Buzz");
    } else ans.push("" + i);
  }
  return ans;
};

//cleaner answer
const fizzBuzz = (n) =>
  new Array(n)
    .fill(0)
    .map((a, i) => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || "" + i);

const fizzBuzz = (n) =>
  [...Array(n)].map((_, i) =>
    ++i % 15 == 0
      ? "FizzBuzz"
      : i % 5 == 0
      ? "Buzz"
      : i % 3 == 0
      ? "Fizz"
      : i + ""
  );

// using hash map: code is flexible now, we can add more conditions
//to the hash map without adding multiple if...else conditions

let fizzBuzz = (n) => {
  let hashMap = new Map();
  let arr = [];

  hashMap.set(3, "Fizz");
  hashMap.set(5, "Buzz");

  for (let i = 1; i <= n; i++) {
    let output = "";
    for (let key of hashMap.keys()) {
      if (i % key == 0) {
        //The Map object holds key-value pairs and remembers the original insertion order of the keys.
        //So 5 will be always checked after 3
        output += hashMap.get(key);
      }
    }
    if (output == "") {
      output = i.toString();
    }
    arr.push(output);
  }
  return arr;
};
