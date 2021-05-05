// You are given n rectangular boxes, the ith box has the length lengthi, the width widthi and the height heighti. Your task is to check if it is possible to pack all boxes into one so that inside each box there is no more than one another box (which, in turn, can contain at most one another box, and so on). More formally, your task is to check whether there is such sequence of n different numbers pi (1 ≤ pi ≤ n) that for each 1 ≤ i < n the box number pi can be put into the box number pi+1.
// A box can be put into another box if all sides of the first one are less than the respective ones of the second one. You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.

// Example

// For length = [1, 3, 2], width = [1, 3, 2], and height = [1, 3, 2], the output should be
// boxesPacking(length, width, height) = true;
// For length = [1, 1], width = [1, 1], and height = [1, 1], the output should be
// boxesPacking(length, width, height) = false;
// For length = [3, 1, 2], width = [3, 1, 2], and height = [3, 2, 1], the output should be
// boxesPacking(length, width, height) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer length

// Array of positive integers.

// Guaranteed constraints:
// 1 ≤ length.length ≤ 104,
// 1 ≤ length[i] ≤ 2 · 104.

// [input] array.integer width

// Array of positive integers.

// Guaranteed constraints:
// width.length = length.length,
// 1 ≤ width[i] ≤ 2 · 104.

// [input] array.integer height

// Array of positive integers.

// Guaranteed constraints:
// height.length = length.length,
// 1 ≤ height[i] ≤ 2 · 104.

// [output] boolean

// true if it is possible to put all boxes into one, false otherwise.

function boxesPacking(length, width, height) {
  if (length.length <= 1) return true;
  const matrix = [];
  for (let i = 0; i < length.length; i++) {
    const inner = [];
    inner.push(length[i]);
    inner.push(width[i]);
    inner.push(height[i]);
    inner.sort((a, b) => b - a);
    matrix.push(inner);
  }
  matrix.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length - 1; j++) {
      if (matrix[j][i] <= matrix[j + 1][i]) return false;
    }
  }
  return true;
}

//other answers
function boxesPacking(length, width, height) {
  let dimensions = [];
  for (let i = 0; i < length.length; i++) {
    dimensions.push([length[i], width[i], height[i]]);
  }
  dimensions = dimensions
    .map((dimension) => dimension.sort((a, b) => a - b))
    .sort((a, b) => a[0] - b[0]);

  for (let j = 0; j < dimensions.length - 1; j++) {
    for (let i = 0; i < 3; i++) {
      if (dimensions[j][i] >= dimensions[j + 1][i]) {
        return false;
      }
    }
  }
  return true;
}

const boxesPacking = (length, width, height) =>
  ((arr) =>
    arr.every((val, idx) => !idx || val.every((v, i) => v > arr[idx - 1][i])))(
    length
      .map((_, idx) =>
        [length[idx], width[idx], height[idx]].sort((a, b) => a - b)
      )
      .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2])
  );

function boxesPacking(l, w, h) {
  a = l
    .map((j, i) => [j, w[i], h[i]].sort((x, y) => x - y))
    .sort((x, y) => x[0] - y[0]);
  return [...Array(3).keys()]
    .map((i) => a.map((j) => j[i]))
    .every(
      (i) => [...new Set(i)].sort((x, y) => x - y).toString() == i.toString()
    );
}
