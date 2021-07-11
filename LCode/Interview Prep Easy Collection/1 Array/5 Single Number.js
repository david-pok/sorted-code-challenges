// Given a non-empty array of integers nums,
// every element appears twice except for one.
// Find that single one.

// Follow up: Could you implement a solution
// with a linear runtime complexity and without
// using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except
// for one element which appears only once.

const singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
  }

  for (let vals in obj) {
    if (obj[vals] == 1) return vals;
  }
};

//other answers
function singleNumber(nums) {
  let num = 0;
  for (let n of nums) {
    num ^= n;
  }
  return num;
}

function singleNumber(nums) {
  return nums.reduce((prev, curr) => prev ^ curr);
}

var singleNumber = function (nums) {
  let hash = {};
  for (let val of nums) {
    hash[val] ? delete hash[val] : (hash[val] = 1);
  }
  return Object.keys(hash)[0];
};
