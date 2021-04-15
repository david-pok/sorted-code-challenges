// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 1000,
// -1 ≤ a[i] ≤ 1000.

// [output] array.integer

// Sorted array a with all the trees untouched.

function sortByHeight(a) {
  let copy = a.slice();
  let trees = [];
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] == -1) {
      trees.push(i);
    }
  }
  copy = copy.filter((elem) => elem != -1).sort((a, b) => a - b);
  for (let i = 0; i < trees.length; i++) {
    copy.splice(trees[i], 0, -1);
  }
  return copy;
}

//other answers
function sortByHeight(a) {
  var sorted = a.filter((h) => h != -1).sort((a, b) => a - b);

  var j = 0;

  return a.map((h, i) => (h != -1 ? sorted[j++] : h));
}

function sortByHeight(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) continue;
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] !== -1 && a[j] < a[min]) min = j;
    }
    if (min !== i) [a[min], a[i]] = [a[i], a[min]];
  }
  return a;
}

const sortByHeight = (a) =>
  ((arr) => a.map((val) => (~val ? arr.shift() : -1)))(
    a.filter((val) => ~val).sort((a, b) => a - b)
  );

sortByHeight = (a) => {
  let c = a.filter((x) => x > -1).sort((a, b) => b - a);
  return a.map((x) => (x > -1 ? c.pop() : -1));
};
