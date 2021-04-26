// Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

// Return the blurred image as an integer, with the fractions rounded down.

// Example

// For

// image = [[1, 1, 1],
//          [1, 7, 1],
//          [1, 1, 1]]
// the output should be boxBlur(image) = [[1]].

// To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.

// For

// image = [[7, 4, 0, 1],
//          [5, 6, 2, 2],
//          [6, 10, 7, 8],
//          [1, 4, 2, 0]]
// the output should be

// boxBlur(image) = [[5, 4],
//                   [4, 4]]
// There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output. To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer image

// An image, stored as a rectangular matrix of non-negative integers.

// Guaranteed constraints:
// 3 ≤ image.length ≤ 100,
// 3 ≤ image[0].length ≤ 100,
// 0 ≤ image[i][j] ≤ 255.

// [output] array.array.integer

// A blurred image represented as integers, obtained through the process in the description.

function boxBlur(image) {
  const ans = [];
  for (let i = 0; i < image.length - 2; i++) {
    const inner = [];
    for (let j = 0; j < image[i].length - 2; j++) {
      let total =
        image[i][j] +
        image[i][j + 1] +
        image[i][j + 2] +
        image[i + 1][j] +
        image[i + 1][j + 1] +
        image[i + 1][j + 2] +
        image[i + 2][j] +
        image[i + 2][j + 1] +
        image[i + 2][j + 2];
      total = Math.floor(total / 9);
      inner.push(total);
    }
    ans.push(inner);
  }
  return ans;
}

//other answers
function boxBlur(image) {
  const blurred = [];

  for (let row = 1; row < image.length - 1; row++) {
    blurred.push([]);
    for (let col = 1; col < image[row].length - 1; col++) {
      let sum = 0;
      for (let r = -1; r <= 1; r++) {
        for (let c = -1; c <= 1; c++) {
          sum += image[row + r][col + c];
        }
      }
      blurred[row - 1].push(Math.floor(sum / 9));
    }
  }

  return blurred;
}

const boxBlur = (image) =>
  image
    .slice(1, -1)
    .map((val) => val.slice(1, -1))
    .map((val, i) =>
      val.map(
        (_, j) =>
          ([...Array(3).keys()].reduce(
            (pre, x, _, arr) =>
              pre + arr.reduce((pre, y) => pre + image[i + x][j + y], 0),
            0
          ) /
            9) ^
          0
      )
    );

function boxBlur(image) {
  let res = [];
  for (let i = 1; i < image.length - 1; i++) {
    res.push([]);
    for (let j = 1; j < image[0].length - 1; j++) {
      let sum = 0;
      for (let dx = -1; dx <= 1; dx++)
        for (let dy = -1; dy <= 1; dy++) sum += image[i + dx][j + dy];
      res[res.length - 1].push(Math.floor(sum / 9));
    }
  }
  return res;
}

function boxBlur(image) {
  res = [];
  for (i = 0; i < image.length; i++) {
    lst = [];
    for (j = 0; j < image[i].length; j++) {
      if (
        i != 0 &&
        i != image.length - 1 &&
        j != 0 &&
        j != image[i].length - 1
      ) {
        upperSum = image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1];
        centerSum = image[i][j] + image[i][j + 1] + image[i][j - 1];
        lowerSum = image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1];
        lst.push(Math.floor((upperSum + centerSum + lowerSum) / 9));
      }
    }
    res.push(lst);
  }
  return res.filter((x) => x.length != 0);
}
