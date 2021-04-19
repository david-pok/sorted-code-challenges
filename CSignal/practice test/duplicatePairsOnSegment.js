// You are given an array of integers numbers and a positive integer k. Your task is to count the number of contiguous subarrays having at least k duplicate pairs, the indices of which are pairwise distinct.

// More formally, your task is to count the number of contiguous subarrays numbers[i..j] for which there exist 2 * k pairwise distinct indices i ≤ i1, j1, i2, j2, ..., ik, jk ≤ j, such that numbers[i1] = numbers[j1], numbers[i2] = numbers[j2], ..., numbers[ik] = numbers[jk].

// Example

// For numbers = [0, 1, 0, 1, 0] and k = 2, the output should be duplicatePairsOnSegment(numbers, k) = 3.

// There are 3 subarrays that satisfy the criteria of containing at least k = 2 pairs of duplicate elements with pairwise distinct indices:

// numbers[0..3] = [0, 1, 0, 1]
// numbers[1..4] = [1, 0, 1, 0]
// numbers[0..4] = [0, 1, 0, 1, 0]
// In each of the subarrays above we can form one pair of 0s and one pair of 1s.

// For numbers = [2, 2, 2, 2, 2, 2] and k = 3, the output should be duplicatePairsOnSegment(numbers, k) = 1.

// There is only 1 applicable subarray: numbers[0..5] = [2, 2, 2, 2, 2, 2], which contains three pairs of 2s.

// For numbers = [1, 3, 3, 1] and k = 1, the output should be duplicatePairsOnSegment(numbers, k) = 4.

// There are 4 subarrays that satisfy the criteria of containing at least k = 1 pair of duplicate elements:

// numbers[0..2] = [1, 3, 3]
// numbers[0..3] = [1, 3, 3, 1]
// numbers[1..2] = [3, 3]
// numbers[1..3] = [3, 3, 1]
// In each of the subarrays above, there is at least a pair of 3s.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer numbers

// An array of integers.

// Guaranteed constraints:
// 2 ≤ numbers.length ≤ 2000,
// 0 ≤ numbers[i] ≤ 104.

// [input] integer k

// A positive integer.

// Guaranteed constraints:
// 1 ≤ k ≤ numbers.length / 2.

// [output] integer

// Return the number of contiguous subarrays which contain at least k pairs of duplicate elements with pairwise distinct indices.

