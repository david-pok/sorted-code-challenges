// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

// Example

// For
// grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
//         [4, 6, 5, 8, 7, 9, 3, 2, 1],
//         [7, 9, 8, 2, 1, 3, 6, 5, 4],
//         [9, 2, 1, 4, 3, 5, 8, 7, 6],
//         [3, 5, 4, 7, 6, 8, 2, 1, 9],
//         [6, 8, 7, 1, 9, 2, 5, 4, 3],
//         [5, 7, 6, 9, 8, 1, 4, 3, 2],
//         [2, 4, 3, 6, 5, 7, 1, 9, 8],
//         [8, 1, 9, 3, 2, 4, 7, 6, 5]]
// the output should be
// sudoku(grid) = true;

// For
// grid = [[1, 3, 2, 5, 4, 6, 9, 2, 7],
//         [4, 6, 5, 8, 7, 9, 3, 8, 1],
//         [7, 9, 8, 2, 1, 3, 6, 5, 4],
//         [9, 2, 1, 4, 3, 5, 8, 7, 6],
//         [3, 5, 4, 7, 6, 8, 2, 1, 9],
//         [6, 8, 7, 1, 9, 2, 5, 4, 3],
//         [5, 7, 6, 9, 8, 1, 4, 3, 2],
//         [2, 4, 3, 6, 5, 7, 1, 9, 8],
//         [8, 1, 9, 3, 2, 4, 7, 6, 5]]
// the output should be
// sudoku(grid) = false.

// The output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer grid

// A matrix representing 9 × 9 grid already filled with numbers from 1 to 9.

// Guaranteed constraints:
// grid.length = 9,
// grid[i].length = 9,
// 1 ≤ grid[i][j] ≤ 9.

// [output] boolean

// true if the given grid represents a correct solution to Sudoku, false otherwise.

function sudoku(grid) {
  let check = {};
  //check all rows first
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (check[grid[i][j]]) {
        return false;
      } else check[grid[i][j]] = true;
    }
    check = {};
  }

  //check all columns next
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (check[grid[j][i]]) {
        return false;
      } else check[grid[j][i]] = true;
    }
    check = {};
  }

  //check all sub grids last
  for (let i = 0; i < grid.length - 2; i += 3) {
    for (let j = 0; j < grid[i].length - 2; j += 3) {
      if (check[grid[i][j]]) {
        return false;
      } else check[grid[i][j]] = true;
      if (check[grid[i][j + 1]]) {
        return false;
      } else check[grid[i][j + 1]] = true;
      if (check[grid[i][j + 2]]) {
        return false;
      } else check[grid[i][j + 2]] = true;
      if (check[grid[i + 1][j]]) {
        return false;
      } else check[grid[i + 1][j]] = true;
      if (check[grid[i + 1][j + 1]]) {
        return false;
      } else check[grid[i + 1][j + 1]] = true;
      if (check[grid[i + 1][j + 2]]) {
        return false;
      } else check[grid[i + 1][j + 2]] = true;
      if (check[grid[i + 2][j]]) {
        return false;
      } else check[grid[i + 2][j]] = true;
      if (check[grid[i + 2][j + 1]]) {
        return false;
      } else check[grid[i + 2][j + 1]] = true;
      if (check[grid[i + 2][j + 2]]) {
        return false;
      } else check[grid[i + 2][j + 2]] = true;
      check = {};
    }
  }

  return true;
}

//first iteration using set
// function sudoku(grid) {
//   let check = new Set();
//   //check all rows first
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//         if (check.has([grid[i][j]])) {
//             return false;
//         } else check.add([grid[i][j]]);
//         console.log(check);
//     }
//     check.clear();
//   }

//   //check all columns next
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//      if (check.has([grid[j][i]])) {
//             return false;
//         } else check.add([grid[j][i]]);
//     }
//     check.clear();
//   }

//   //check all sub grids last
//   for (let i = 0; i < grid.length - 2; i += 3) {
//     for (let j = 0; j < grid[i].length - 2; j += 3) {
//       check.add([grid[i][j]]);
//       check.add([grid[i][j + 1]]);
//       check.add([grid[i][j + 2]]);
//       check.add([grid[i + 1][j]]);
//       check.add([grid[i + 1][j + 1]]);
//       check.add([grid[i + 1][j + 2]]);
//       check.add([grid[i + 2][j]]);
//       check.add([grid[i + 2][j + 1]]);
//       check.add([grid[i + 2][j + 2]]);
//       if (check.size != 9) {
//         return false;
//       }
//     check.clear();
//     }
//   }

//   return true;
// }
