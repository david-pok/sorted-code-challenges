// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1

// Follow-up: Could you solve the problem in linear time and in O(1) space?

//linear time but O(n) space
const majorityElement = function (nums) {
  const major = nums.length / 2;
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = hash[nums[i]] + 1 || 1;
  }
  for (let num in hash) {
    if (hash[num] > major) return num;
  }
};

//linear time and O(1) space
const majorityElement = function (nums) {
  const srted = nums.sort((a, b) => a - b);
  const major = srted.length / 2;
  let count = 0;
  let curr = srted[0];
  for (let i = 0; i < srted.length; i++) {
    if (srted[i] == curr) count++;
    if (srted[i] !== curr) {
      count = 1;
      curr = srted[i];
    }
    if (count > major) return srted[i];
  }
};

//other answers
const majorityElement = function (nums) {
  // Boyer-Moore Voting Algorithm

  let count = 0,
    candidate = 0;

  for (let num of nums) {
    if (count == 0) {
      candidate = num;
    }
    count += num == candidate ? 1 : -1;
  }

  return candidate;
};

//If the array were sorted the majority element, by definition, would be in the middle.
const majorityElement = function (nums) {
  return nums.sort()[Math.floor(nums.length / 2)];
};
