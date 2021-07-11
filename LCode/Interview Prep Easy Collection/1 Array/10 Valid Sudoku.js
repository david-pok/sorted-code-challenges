// Determine if a 9 x 9 Sudoku board is valid.
// Only the filled cells need to be validated
// according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain
// the digits 1-9 without repetition.

// Note:

// A Sudoku board (partially filled) could be
// valid but is not necessarily solvable.
// Only the filled cells need to be validated
// according to the mentioned rules.

// Example 1:

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with
// the 5 in the top left corner being modified to 8.
// Since there are two 8's in the top left 3x3
// sub-box, it is invalid.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.

const isValidSudoku = function (board) {
  let check = {};
  //check the rows
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        check[board[i][j]] = check[board[i][j]] + 1 || 1;
      }
    }
    for (let x in check) {
      if (check[x] > 1) {
        return false;
      }
    }
    check = {};
  }

  //check columns
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[j][i] !== ".") {
        check[board[j][i]] = check[board[j][i]] + 1 || 1;
      }
    }
    for (let x in check) {
      if (check[x] > 1) {
        return false;
      }
    }
    check = {};
  }

  //check 3x3 boxes
  for (let i = 0; i < board.length - 2; i += 3) {
    for (let j = 0; j < board[i].length - 2; j += 3) {
      check[board[i][j]] = check[board[i][j]] + 1 || 1;
      check[board[i][j + 1]] = check[board[i][j + 1]] + 1 || 1;
      check[board[i][j + 2]] = check[board[i][j + 2]] + 1 || 1;
      check[board[i + 1][j]] = check[board[i + 1][j]] + 1 || 1;
      check[board[i + 1][j + 1]] = check[board[i + 1][j + 1]] + 1 || 1;
      check[board[i + 1][j + 2]] = check[board[i + 1][j + 2]] + 1 || 1;
      check[board[i + 2][j]] = check[board[i + 2][j]] + 1 || 1;
      check[board[i + 2][j + 1]] = check[board[i + 2][j + 1]] + 1 || 1;
      check[board[i + 2][j + 2]] = check[board[i + 2][j + 2]] + 1 || 1;

      for (let x in check) {
        if (x !== ".") {
          if (check[x] > 1) {
            return false;
          }
        }
      }
      check = {};
    }
  }
  return true;
};
