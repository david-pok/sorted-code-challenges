// Given an integer array nums, find the contiguous 
// subarray (containing at least one number) which 
// has the largest sum and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:

// Input: nums = [1]
// Output: 1

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105
 

// Follow up: If you have figured out the O(n) solution, 
// try coding another solution using the divide and 
// conquer approach, which is more subtle.


//bad answer/brute forced
var maxSubArray = function(nums) {
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let currMax = 0;
        for (let j = i; j < nums.length; j++) {
            currMax += nums[j];
            max = Math.max(currMax, max);
        }
    }
    return max;
};
