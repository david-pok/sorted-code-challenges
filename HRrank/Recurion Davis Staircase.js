// Davis has a number of staircases in his house and he likes to climb each staircase 1, 2, or 3 steps at a time. Being a very precocious child, he wonders how many ways there are to reach the top of the staircase.

// Given the respective heights for each of the s staircases in his house, find and print the number of ways he can climb each staircase, module  on a new line.

// Example

// n = 5

// The staircase has 5 steps. Davis can step on the following sequences of steps:

// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1
// 1 2 1 1
// 2 1 1 1
// 1 2 2
// 2 2 1
// 2 1 2
// 1 1 3
// 1 3 1
// 3 1 1
// 2 3
// 3 2
// There are 13 possible ways he can take these 5

// Function Description

// Complete the stepPerms function using recursion in the editor below.

// stepPerms has the following parameter(s):

// int n: the number of stairs in the staircase

// Returns

// int: the number of ways Davis can climb the staircase, modulo 10000000007

// Input Format

// The first line contains a single integer,s , the number of staircases in his house.
// Each of the following s lines contains a single integer, n, the height of staircase i.

// Constraints
// 1 <= s <= 5
// 1 <= n <= 36

// Subtasks

// 1 <= n <= 20 for 50% of the maximum score.

// Sample Input

// STDIN   Function
// -----   --------
// 3       s = 3 (number of staircases)
// 1       first staircase n = 1
// 3       second n = 3
// 7       third n = 7

// Sample Output

// 1
// 4
// 44

// Explanation

// Let's calculate the number of ways of climbing the first two of the Davis' s=3 staircases:

// The first staircase only has n = 1 step, so there is only one way for him to climb it (i.e., by jumping 1 step). Thus, we print 1 on a new line.
// The second staircase has n = 3 steps and he can climb it in any of the four following ways:
//     1. 1 -> 1 -> 1
//     2. 1 -> 2
//     3. 2 -> 1
//     4. 3
// Thus, we print 4 on a new line.

function stepPerms(n) {
  // Write your code here
  const cache = {};
  function steps(n) {
    if (cache[n]) return cache[n];
    if (n == 0) return 1;
    if (n < 0) return 0;
    cache[n] = steps(n - 1) + steps(n - 2) + steps(n - 3);
    return cache[n];
  }
  return steps(n);
}
