// You are given an array with all the numbers
// from 1 to N appearing exactly once, except
// for one number that is missing.

// How can you find the missing number in O(n) time and O(1) space?

// What if there are two numbers missing?

//SOLUTIONS

//for 1 missing
//get sum of given array
//then get sum of same arr without number missing
//you can find sum with this equation: n = highest number
// n * (n + 1) // 2
// ex. 1, 2, 3, 4, 5
// n = 5
// 5 * (5 + 1) // 2
// sum is 15

const oneMissing = (numbers) => {
  const n = Math.max(...numbers);
  const numbSum = numbers.reduce((a, c) => a + c);
  const realSum = Math.ceil((n * (n + 1)) / 2);
  return realSum - numbSum;
};

//this is to create an array 1 to 100 with a missing number
const arr = [...Array(100+1).keys()].slice(1);
const rand = Math.ceil(Math.random(100) * 100);
arr.splice(rand, 1);

console.log(oneMissing(arr));

//for 2 missing