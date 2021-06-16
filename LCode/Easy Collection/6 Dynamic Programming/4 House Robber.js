// You are a professional robber planning to rob
// houses along a street. Each house has a certain
// amount of money stashed, the only constraint
// stopping you from robbing each of them is that
// adjacent houses have security systems connected
// and it will automatically contact the police if
// two adjacent houses were broken into on the same night.

// Given an integer array nums representing the
// amount of money of each house, return the
// maximum amount of money you can rob tonight
// without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

const rob = function (nums) {
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);

  //our algo will start on the 3rd element so we can say that two iterations ago was the first elem
  //since there is nothing else to compare that first elem to, it is by default the highest
  //one iteration ago will refer to the firs 2 elems and compare them
  //naturally, the highest will be the max of one iteration ago
  let maxFromTwoItersAgo = nums[0];
  let maxFromOneItersAgo = Math.max(nums[0], nums[1]);

  //we then start our loop and we compare which is the highest
  //we check the current elem + two iters ago vs. the max at 1 iter ago
  //the highest will be our current max
  //and we keep juggling our pointers until we reach the end
  for (let i = 2; i < nums.length; i++) {
    let currMax = Math.max(nums[i] + maxFromTwoItersAgo, maxFromOneItersAgo);

    maxFromTwoItersAgo = maxFromOneItersAgo;
    maxFromOneItersAgo = currMax;
  }
  return maxFromOneItersAgo;
};
