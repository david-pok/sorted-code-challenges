// The longest diagonals of a square matrix are defined as follows:

// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.

// Example

// For

// matrix = [[1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]]
// the output should be

// reverseOnDiagonals(matrix) = [[9, 2, 7],
//                               [4, 5, 6],
//                               [3, 8, 1]]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer matrix

// Guaranteed constraints:
// 1 ≤ matrix.length ≤ 100,
// matrix.length = matrix[i].length,
// 1 ≤ matrix[i][j] ≤ 105.

// [output] array.array.integer

// Matrix with the order of elements on its longest diagonals reversed.

function reverseOnDiagonals(matrix) {
  if (matrix.length == 1) return matrix;
  let end = matrix.length - 1;
  let half = Math.floor(matrix.length / 2);
  for (let i = 0; i < half; i++) {
    //swaps top left and bottom right
    let temp1 = matrix[end - i][end - i];
    matrix[end - i][end - i] = matrix[i][i];
    matrix[i][i] = temp1;

    //swaps the top right and bottom left
    [matrix[i][end - i], matrix[end - i][i]] = [
      matrix[end - i][i],
      matrix[i][end - i],
    ];
  }
  return matrix;
}

//other answers
const reverseOnDiagonals = (m) => {
  for (let i = 0, j = m.length - 1; i < m.length / 2; i++, j--) {
    [m[i][i], m[j][j]] = [m[j][j], m[i][i]];
    [m[i][j], m[j][i]] = [m[j][i], m[i][j]];
  }
  return m;
};

const reverseOnDiagonals = (matrix) => {
  for (let i = 0, j = matrix.length - 1; i < matrix.length / 2; i++, j--) {
    [matrix[i][i], matrix[j][j]] = [matrix[j][j], matrix[i][i]];
    [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  }
  return matrix;
};

function reverseOnDiagonals(matrix) {
  const { length: len } = matrix;
  for (let i = 0; i < len / 2; i++) {
    [matrix[i][i], matrix[len - i - 1][len - i - 1]] = [
      matrix[len - i - 1][len - i - 1],
      matrix[i][i],
    ];
    [matrix[i][len - i - 1], matrix[len - i - 1][i]] = [
      matrix[len - i - 1][i],
      matrix[i][len - i - 1],
    ];
  }
  return matrix;
}
