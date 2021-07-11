// You are given two integer arrays nums1 and nums2,
//  sorted in non-decreasing order, and two integers
//   m and n, representing the number of elements in
//    nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array
// sorted in non-decreasing order.

// The final sorted array should not be returned
//  by the function, but instead be stored inside
//  the array nums1. To accommodate this, nums1 has
//  a length of m + n, where the first m elements
//  denote the elements that should be merged,
//  and the last n elements are set to 0 and
//  hould be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the
//  underlined elements coming from nums1.

// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1.
//  The 0 is only there to ensure the merge result can fit in nums1.

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

// Hint #1
// You can easily solve this problem if you simply
// think about two elements at a time rather than
// two arrays. We know that each of the individual
// arrays is sorted. What we don't know is how they
// will intertwine. Can we take a local decision
// and arrive at an optimal solution?

// Hint #2
// If you simply consider one element each at a
// time from the two arrays and make a decision
// and proceed accordingly, you will arrive at
// the optimal solution.

const merge = function (nums1, m, nums2, n) {
  const copy = nums1.slice();
  let a = 0,
    b = 0;

  for (let i = 0; i < nums1.length; i++) {
    if (copy[a] == 0 && a >= m) {
      nums1[i] = nums2[b];
      a++;
      b++;
      continue;
    }

    if (nums2[b] < copy[a]) {
      nums1[i] = nums2[b];
      b++;
      continue;
    } else {
      nums1[i] = copy[a];
      a++;
      continue;
    }
  }
  return nums1;
};

//other answers
var merge = function (nums1, m, nums2, n) {
  var insertPos = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};

var merge = function (nums1, m, nums2, n) {
  let idx1 = m - 1,
    idx2 = n - 1,
    idx3 = m + n - 1;
  while (idx2 >= 0) {
    nums1[idx3--] = nums1[idx1] > nums2[idx2] ? nums1[idx1--] : nums2[idx2--];
  }
};

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m);

  var i = 0;
  var j = 0;

  while (j < nums2.length) {
    if (nums1[i] === undefined || nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      j++;
      i++;
    } else {
      i++;
    }
  }
};

var merge = function (nums1, m, nums2, n) {
  m--;
  n--;
  let i = nums1.length - 1;
  while (i >= 0) {
    if (n > -1 && m > -1 && nums1[m] >= nums2[n]) {
      nums1[i] = nums1[m];
      nums1[m] = nums2[n];
      m--;
    } else if (n > -1) {
      nums1[i] = nums2[n--];
    }
    i--;
  }
};
