// In the Land Of Chess, bishops don't really like each other. In fact, when two bishops happen to stand on the same diagonal, they immediately rush towards the opposite ends of that same diagonal.

// Given the initial positions (in chess notation) of two bishops, bishop1 and bishop2, calculate their future positions. Keep in mind that bishops won't move unless they see each other along the same diagonal.

// Example

// For bishop1 = "d7" and bishop2 = "f5", the output should be
// bishopDiagonal(bishop1, bishop2) = ["c8", "h3"].

// For bishop1 = "d8" and bishop2 = "b5", the output should be
// bishopDiagonal(bishop1, bishop2) = ["b5", "d8"].

// The bishops don't belong to the same diagonal, so they don't move.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string bishop1

// Coordinates of the first bishop in chess notation.

// Guaranteed constraints:
// bishop1.length = 2,
// 'a' ≤ bishop1[0] ≤ 'h',
// 1 ≤ bishop1[1] ≤ 8.

// [input] string bishop2

// Coordinates of the second bishop in the same notation.

// Guaranteed constraints:
// bishop2.length = 2,
// 'a' ≤ bishop2[0] ≤ 'h',
// 1 ≤ bishop2[1] ≤ 8.

// [output] array.string

// Coordinates of the bishops in lexicographical order after they check the diagonals they stand on.

function bishopDiagonal(bishop1, bishop2) {
  let bish1 = bishop1.slice();
  let let1 = bish1[0].charCodeAt();
  let num1 = parseInt(bish1[1]);

  let bish2 = bishop2.slice();
  let let2 = bish2[0].charCodeAt();
  let num2 = parseInt(bish2[1]);

  let onPath = false;
  const ans = [];

  //check up right direction
  while (let1 < 104 && num1 < 8) {
    let1++;
    num1++;
    if (let1 == let2 && num1 == num2) onPath = true;
  }
  if (onPath) {
    while (let2 > 97 && num2 > 1) {
      let2--;
      num2--;
    }
    ans.push(String.fromCharCode(let2) + num2.toString());
    ans.push(String.fromCharCode(let1) + num1.toString());
    return ans;
  }

  //reset bishop 1 cooredinates
  let1 = bish1[0].charCodeAt();
  num1 = parseInt(bish1[1]);
  // then check down right direction
  while (let1 < 104 && num1 > 1) {
    let1++;
    num1--;
    if (let1 == let2 && num1 == num2) onPath = true;
  }
  if (onPath) {
    while (let2 > 97 && num2 < 8) {
      let2--;
      num2++;
    }
    ans.push(String.fromCharCode(let2) + num2.toString());
    ans.push(String.fromCharCode(let1) + num1.toString());
    return ans;
  }

  let1 = bish1[0].charCodeAt();
  num1 = parseInt(bish1[1]);
  //check down left direction
  while (let1 > 97 && num1 > 1) {
    let1--;
    num1--;
    if (let1 == let2 && num1 == num2) onPath = true;
  }
  if (onPath) {
    while (let2 < 104 && num2 < 8) {
      let2++;
      num2++;
    }
    ans.push(String.fromCharCode(let1) + num1.toString());
    ans.push(String.fromCharCode(let2) + num2.toString());
    return ans;
  }

  let1 = bish1[0].charCodeAt();
  num1 = parseInt(bish1[1]);
  //check up left direction
  while (let1 > 97 && num1 < 8) {
    let1--;
    num1++;
    if (let1 == let2 && num1 == num2) onPath = true;
  }
  if (onPath) {
    while (let2 < 104 && num2 > 1) {
      let2++;
      num2--;
    }
    ans.push(String.fromCharCode(let1) + num1.toString());
    ans.push(String.fromCharCode(let2) + num2.toString());
    return ans;
  }

  //if bishops not on same path return their original coordinates
  //but in lex order
  ans.push(bishop1);
  ans.push(bishop2);
  return ans.sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt());
}

//other answers
function bishopDiagonal(b1, b2) {
  (b1 = b1.split("").map((i) => i.charCodeAt(0))),
    (b2 = b2.split("").map((i) => i.charCodeAt(0)));
  if (Math.abs(b1[0] - b2[0]) == Math.abs(b1[1] - b2[1])) {
    if (b1[0] < b2[0]) {
      if (b1[1] < b2[1]) {
        while (b1[0] > 97 && b1[1] > 49) {
          (b1[0] = b1[0] - 1), (b1[1] = b1[1] - 1);
        }
        while (b2[0] < 104 && b2[1] < 56) {
          (b2[0] = b2[0] + 1), (b2[1] = b2[1] + 1);
        }
      } else {
        while (b1[0] > 97 && b1[1] < 56) {
          (b1[0] = b1[0] - 1), (b1[1] = b1[1] + 1);
        }
        while (b2[0] < 104 && b2[1] > 49) {
          (b2[0] = b2[0] + 1), (b2[1] = b2[1] - 1);
        }
      }
    } else {
      if (b1[1] < b2[1]) {
        while (b1[0] < 104 && b1[1] > 49) {
          (b1[0] = b1[0] + 1), (b1[1] = b1[1] - 1);
        }
        while (b2[0] > 97 && b2[1] < 56) {
          (b2[0] = b2[0] - 1), (b2[1] = b2[1] + 1);
        }
      } else {
        while (b1[0] < 104 && b1[1] < 56) {
          (b1[0] = b1[0] + 1), (b1[1] = b1[1] + 1);
        }
        while (b2[0] > 97 && b2[1] > 49) {
          (b2[0] = b2[0] - 1), (b2[1] = b2[1] - 1);
        }
      }
    }
  }
  return [
    [String.fromCharCode(b1[0]), String.fromCharCode(b1[1])].join(""),
    [String.fromCharCode(b2[0]), String.fromCharCode(b2[1])].join(""),
  ].sort();
}

function bishopDiagonal(bishop1, bishop2) {
  let b1 = [bishop1.charCodeAt(0) - 96, Number(bishop1[1])];
  let b2 = [bishop2.charCodeAt(0) - 96, Number(bishop2[1])];

  if (Math.abs(b1[0] - b2[0]) !== Math.abs(b1[1] - b2[1])) {
    return [bishop1, bishop2].sort();
  }

  let slope = (b2[1] - b1[1]) / (b2[0] - b1[0]);

  while (!b1.includes(1) && !b1.includes(8)) {
    b1[0]++;
    b1[1] += slope;
  }

  while (!b2.includes(1) && !b2.includes(8)) {
    b2[0]--;
    b2[1] -= slope;
  }

  return [
    String.fromCharCode(b1[0] + 96) + b1[1],
    String.fromCharCode(b2[0] + 96) + b2[1],
  ].sort();
}
