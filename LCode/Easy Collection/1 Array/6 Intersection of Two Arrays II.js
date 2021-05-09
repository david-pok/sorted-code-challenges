// Given two integer arrays nums1 and nums2,
// return an array of their intersection.
// Each element in the result must appear
// as many times as it shows in both arrays
// and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// Follow up:

// What if the given array is already sorted?
// How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size?
// Which algorithm is better?
// What if elements of nums2 are stored on disk,
// and the memory is limited such that you cannot
// load all elements into the memory at once?

const intersect = function (nums1, nums2) {
  //create our object to keep track of one array
  const numMap = {};
  //create our return array answer
  const results = [];

  //loop through our first array
  for (let num of nums1) {
    //if the element doesnt exist in our obj already
    //we will set its value to 1
    //if it already does, we will just increment its value by 1
    numMap[num] = numMap[num] + 1 || 1;
  }

  //loop through our second array
  for (let num of nums2) {
    //if that element exists in our obj
    //and its value is greater than zero
    //which means we can still use it
    //we push that number into our results array
    //then decrement its key to indicate that we have used
    //that specific element
    //because there might be duplicates
    if (numMap[num] > 0) {
      results.push(num);
      numMap[num]--;
    }
  }
  return results;
};

//other answers
var intersect = function (nums1, nums2) {
  const map = new Map();
  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  const result = [];
  for (const n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      result.push(n);
      map.set(n, map.get(n) - 1);
    }
  }
  return result;
};

var intersect = (nums1, nums2) =>
  nums1.filter((item) => {
    if (nums2.includes(item))
      return nums2.splice(nums2.indexOf(item), 1) || true;
  });

var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const answer = [];

  let n1 = 0,
    n2 = 0;

  while (n1 < nums1.length && n2 < nums2.length) {
    if (nums1[n1] === nums2[n2]) {
      answer.push(nums1[n1]);
      n1++;
      n2++;
    } else if (nums1[n1] < nums2[n2]) n1++;
    else n2++;
  }
  return answer;
};
