// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:
// Input: matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//                 ]

// Output: [
//     [7,4,1],
//     [8,5,2],
//     [9,6,3]
//         ]

// Example 2:
// Input: matrix = [
//     [5,1,9,11],
//     [2,4,8,10],
//     [13,3,6,7],
//     [15,14,12,16]
//                 ]

// Output: [
//     [15,13,2,5],
//     [14,3,4,1],
//     [12,6,8,9],
//     [16,7,10,11]
//         ]

// Example 3:
// Input: matrix = [[1]]
// Output: [[1]]

// Example 4:
// Input: matrix = [
//     [1,2],
//     [3,4]
//                 ]

// Output: [
//     [3,1],
//     [4,2]
//         ]

// Constraints:

// matrix.length == n
// matrix[i].length == n
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

const rotate = function (matrix) {
  //first way to do this
  //start by rotating all the corner elements
  //and then we move on the rotate the elements clockwise of corners
  //keep iterating until we reach our end
  let left = 0;
  let right = matrix.length - 1;

  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      let top = left;
      let bottom = right;
      let tempTopLeft = matrix[top][left + i];
      matrix[top][left + i] = matrix[bottom - i][left];
      matrix[bottom - i][left] = matrix[bottom][right - i];
      matrix[bottom][right - i] = matrix[top + i][right];
      matrix[top + i][right] = tempTopLeft;
    }
    right -= 1;
    left += 1;
  }

  //second way of doing this
  //transpose the elements
  //transpose means to swaps all the diagonals
  //which would turn all our rows into columns
  //and all our columns into rows
  //once we transpose, we can just reverse all the arrays to get our target
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  //   }
  // }
  // for (let i = 0; i < matrix.length; i++) {
  //   matrix[i].reverse();
  // }
};