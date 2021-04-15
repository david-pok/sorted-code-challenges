// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

// Example

// For cell = "a1", the output should be
// chessKnightMoves(cell) = 2.

// For cell = "c2", the output should be
// chessKnightMoves(cell) = 6.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string cell

// String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.

// Guaranteed constraints:
// cell.length = 2,
// 'a' ≤ cell[0] ≤ 'h',
// 1 ≤ cell[1] ≤ 8.

// [output] integer

function chessKnightMoves(cell) {
  let lett = cell[0].charCodeAt();
  let numb = parseInt(cell[1]);
  let count = 0;

  if (lett + 1 <= 104 && numb + 2 <= 8) count++;
  if (lett + 2 <= 104 && numb + 1 <= 8) count++;
  if (lett + 2 <= 104 && numb - 1 >= 1) count++;
  if (lett + 1 <= 104 && numb - 2 >= 1) count++;
  if (lett - 1 >= 97 && numb - 2 >= 1) count++;
  if (lett - 2 >= 97 && numb - 1 >= 1) count++;
  if (lett - 2 >= 97 && numb + 1 <= 8) count++;
  if (lett - 1 >= 97 && numb + 2 <= 8) count++;

  return count;
}
