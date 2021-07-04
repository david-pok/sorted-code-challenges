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

const oneMissing2 = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        if (i + 1 !== numbers[i]) {
            return i + 1;
        }
    }
}

const testArr = [1,2,3,4,5,6,8];
//this is to create an array 1 to 100 with a missing number
const arr = [...Array(100+1).keys()].slice(1);
const rand = Math.ceil(Math.random(100) * 100);
arr.splice(rand, 1);

console.log(oneMissing2(testArr));

//for 2 missing

// We multiply all the numbers in the array we’re given 
// and find the total product.

// Then, we multiply all the numbers from 1 to N and 
// find that total product.

// Then, we divide the second product by the first product 
// and that will give us n1 * n2.

// Now, we use some algebra (with n1 * n2 and n1 + n2) 
// to create a quadratic equation that will give us the 
// value of n1 and n2.