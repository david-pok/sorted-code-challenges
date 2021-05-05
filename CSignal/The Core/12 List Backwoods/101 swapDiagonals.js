// The longest diagonals of a square matrix are defined as follows:

// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.

// Example

// For

// matrix = [[1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]]
// the output should be

// swapDiagonals(matrix) = [[3, 2, 1],
//                          [4, 5, 6],
//                          [9, 8, 7]]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer matrix

// Guaranteed constraints:
// 1 ≤ matrix.length ≤ 100,
// matrix.length = matrix[i].length,
// 1 ≤ matrix[i][j] ≤ 105.

// [output] array.array.integer

// Matrix with swapped diagonals.

function swapDiagonals(matrix) {
  const end = matrix.length - 1;
  for (let i = 0; i < matrix.length; i++) {
    [matrix[i][i], matrix[i][end - i]] = [matrix[i][end - i], matrix[i][i]];
  }
  return matrix;
}

//other answers
const swapDiagonals = (matrix) =>
  matrix.map(
    (val, idx) => (
      ([val[idx], val[matrix.length - 1 - idx]] = [
        val[matrix.length - 1 - idx],
        val[idx],
      ]),
      val
    )
  );
