// Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

// type indicates if it's a left or a right shoe;
// size is the size of the shoe.
// Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

// Example

// For

// shoes = [[0, 21],
//          [1, 23],
//          [1, 21],
//          [0, 23]]
// the output should be
// pairOfShoes(shoes) = true;

// For

// shoes = [[0, 21],
//          [1, 23],
//          [1, 21],
//          [1, 23]]
// the output should be
// pairOfShoes(shoes) = false.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer shoes

// Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

// Guaranteed constraints:
// 1 ≤ shoes.length ≤ 200,
// 1 ≤ shoes[i][1] ≤ 100.

// [output] boolean

// true if it is possible to pair the shoes, false otherwise.

function pairOfShoes(shoes) {
  if (shoes.length < 2) return false;
  for (let i = 0; i < shoes.length; i++) {
    for (let j = 1; j < shoes.length; j++) {
      if (shoes[i] && shoes[j]) {
        if (shoes[i][1] == shoes[j][1] && shoes[i][0] != shoes[j][0]) {
          shoes.splice(j, 1);
          shoes.splice(i, 1);
          j = 0;
        }
      }
    }
  }
  if (shoes.length > 0) return false;
  else return true;
}

//other answers
function pairOfShoes(s) {
  let h = {};
  for (let i = 0; i < s.length; i++) {
    h[s[i][1]] = h[s[i][1]] || 0;
    h[s[i][1]] += s[i][0] == 1 ? 1 : -1;
  }
  return Object.values(h).filter((x) => x != 0).length == 0;
}

function pairOfShoes(shoes) {
  let pairs = {};
  for (let e of shoes) {
    if (pairs[e[1]] == undefined) pairs[e[1]] = 0;
    if (e[0]) {
      pairs[e[1]]++;
    } else {
      pairs[e[1]]--;
    }
  }
  return Object.values(pairs).every((e) => e == 0);
}

function pairOfShoes(shoes) {
  let lefts = {},
    rights = {},
    sizes = [];

  for (let i = 0; i <= 100; i++) {
    sizes.push([0, 0]);
  }

  shoes.forEach((shoe) => {
    sizes[shoe[1]][shoe[0]]++;
  });

  for (let size of sizes) {
    if (size[0] !== size[1]) {
      return false;
    }
  }

  return true;
}

function pairOfShoes(shoes) {
  const feet = {};

  for (const [foot, size] of shoes) {
    if (!(size in feet)) feet[size] = 0;
    feet[size] += foot ? 1 : -1;
  }

  return Object.values(feet).every((x) => !x);
}

pairOfShoes = (shoes) => {
  const pairs = {};

  for (let shoe of shoes) {
    pairs[shoe[1]]
      ? pairs[shoe[1]].push(shoe[0])
      : (pairs[shoe[1]] = [shoe[0]]);
  }

  for (let arr of Object.values(pairs)) {
    let len = arr.length;
    let sum = arr.reduce((a, b) => a + b);

    if (len % 2 || sum != len / 2) return false;
  }

  return true;
};
