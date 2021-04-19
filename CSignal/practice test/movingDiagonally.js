// You need to get to the mall to buy some new shoes, but you're not sure how to get there. Your city is a n × m rectangular grid of blocks, where your home is located at the coordinates (x1, y1) and the mall's location is (x2, y2).

// Since you're not sure exactly how to get to the mall, you follow a movement strategy based on these rules:

// Move diagonally on each move, starting in the direction (+1, +1). It means that standing at a cell with coordinates (x, y), you'll move to the cell with coordinates (x + 1, y + 1) unless the new cell is outside the city grid,
// If the current move would take you outside the city grid, come back and reverse the direction that was leading outside the grid (eg: if the x coordinate is outside the grid, reverse the x movement direction),
// If the current move would escape the city grid outside of a corner, reverse both directions.
// Your task is to determine how many steps it will take to reach the mall at (x2, y2). Return -1 if it's not possible to reach the mall using this strategy.

// For better understanding how the movement rules work, take a look at the animations in the examples section.

// Notes:

// A diagonal movement or a bounce (direction change) each count as a single step.
// Coordinates of a cell are defined differently in comparison to mathematical coordinates, take a closer look at the animations in the examples section below.
// Example

// For n = 5, m = 5, x1 = 2, y1 = 1, x2 = 1, and y2 = 2, the output should be movingDiagonally(n, m, x1, y1, x2, y2) = 7.

// For n = 5, m = 3, x1 = 2, y1 = 0, x2 = 3, and y2 = 2, the output should be movingDiagonally(n, m, x1, y1, x2, y2) = -1.

// You will never reach the mall in this case, so the answer is -1.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// An integer representing the width of the field.

// Guaranteed constraints:
// 2 ≤ n ≤ 100.

// [input] integer m

// An integer representing the height of the field.

// Guaranteed constraints:
// 2 ≤ m ≤ 100.

// [input] integer x1

// An integer representing the column of the starting position.

// Guaranteed constraints:
// 0 ≤ x1 < n.

// [input] integer y1

// An integer representing the row of the starting position.

// Guaranteed constraints:
// 0 ≤ y1 < m.

// [input] integer x2

// An integer representing the column of the destination.

// Guaranteed constraints:
// 0 ≤ x2 < n.

// [input] integer y2

// An integer representing the row of the destination.

// Guaranteed constraints:
// 0 ≤ y2 < m.

// [output] integer

// Return the minimum number of steps it'll take to get from (x1, y1) to (x2, y2), or return -1 if it's not possible.

