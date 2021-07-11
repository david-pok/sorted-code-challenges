// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Follow up:

// Try to come up with as many solutions as you can.
// There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?
//    Hide Hint #1
// The easiest solution would use additional memory
// and that is perfectly fine.
//    Hide Hint #2
// The actual trick comes when trying to solve this
// problem without using any additional memory.
// This means you need to use the original array
// somehow to move the elements around. Now,
// we can place each element in its original
// location and shift all the elements around it
// to adjust as that would be too costly and most
// likely will time out on larger input arrays.
//    Hide Hint #3
// One line of thought is based on reversing
// the array (or parts of it) to obtain the
// desired result. Think about how reversal might
// potentially help us out by using an example.
//    Hide Hint #4
// The other line of thought is a tad bit
// complicated but essentially it builds on
// the idea of placing each element in its
// original position while keeping track of
// the element originally in that position.
// Basically, at every step, we place an element
// in its rightful position and keep track of
// the element already there or the one being
// overwritten in an additional variable.
// We can't do this in one linear pass and the
// idea here is based on cyclic-dependencies between elements.

const rotate = (nums, k) => {
  //after a certain point we are repeating our rotations
  //we get the remainder of dividing k by the length
  //to get rid of all the duplicate rotations
  k %= nums.length;
  //create our stack to put our entries being rotated
  let stack = [];
  //loop while decrementing k, stopping at 0
  while (k--) {
    //push our removed entries from the end into our stack
    stack.push(nums.pop());
  }
  //we then put our entire stack(reversed)
  //into the original array
  nums.unshift(...stack.reverse());
};

//other answers
var rotate = (nums, k) => {
  let [start, count] = [0, 0];
  while (count < nums.length) {
    let [current, prev] = [start, nums[start]];
    do {
      current = (current + k) % nums.length;
      [nums[current], prev] = [prev, nums[current]];
      count++;
    } while (current !== start);
    start++;
  }
};

const rotate = (nums, k) => {
  nums.unshift(...nums.splice(nums.length - (k % nums.length)));
};

var rotate = function (nums, k) {
  k %= nums.length; // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }; // suppose  ----->--->
  reverse(0, nums.length - 1); // reverse   <--<------
  reverse(0, k - 1); // reverse first part ---><----
  reverse(k, nums.length - 1); // reverse second part --->----->
};
