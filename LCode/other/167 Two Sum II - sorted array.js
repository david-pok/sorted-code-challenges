// Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

// Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]

// Constraints:

// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order.
// -1000 <= target <= 1000
// The tests are generated such that there is exactly one solution.

//brute force
const twoSum = function (numbers, target) {
  const ret = [];
  let start = 0;
  while (start < numbers.length - 1) {
    for (let i = start + 1; i < numbers.length; i++) {
      let diff = target - numbers[start];
      if (diff == numbers[i]) ret.push(start + 1, i + 1);
    }
    start++;
  }
  return ret;
};

//more efficient time with hash map
const twoSum = function (numbers, target) {
  const hash = {};
  const ret = [];
  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];
    if (hash[diff] !== undefined) {
      ret.push(hash[diff] + 1, i + 1);
    } else {
      hash[numbers[i]] = i;
    }
  }
  return ret;
};

//another answer
//since the array is already sorted we start a pointer at the beginning
//and a pointer at the end
//we constantly check if they sum up to target
//if the sum is larger than target we decrement end pointer
//if sum is smaller than target we increment beginning pointer
//keep going until we sum up to target
const twoSum = (numbers, target) => {
  let p1 = 0;
  let p2 = numbers.length - 1;

  while (numbers[p1] + numbers[p2] !== target) {
    if (numbers[p1] + numbers[p2] > target) {
      p2--;
    } else {
      p1++;
    }
  }

  return [p1 + 1, p2 + 1];
};
