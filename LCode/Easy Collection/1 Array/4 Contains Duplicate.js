// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

const containsDuplicate = function (nums) {
  let check = new Set();
  for (let i = 0; i < nums.length; i++) {
    check.add(nums[i]);
  }
  if (check.size !== nums.length) return true;
  else return false;
};

//other answers

//this is a much more efficient version of my answer
var containsDuplicate = function (nums) {
  return new Set(nums).size < nums.length;
};

var containsDuplicate = function (nums) {
  var obj = {};

  for (var i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;

    if (obj[nums[i]] > 1) return true;
  }

  return false;
};

