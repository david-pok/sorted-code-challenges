// Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

// Example

// For items = [3, 5, 2, 4, 5], the output should be
// arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer items

// Non-empty array of positive integers.

// Guaranteed constraints:
// 3 ≤ items.length ≤ 15,
// 1 ≤ items[i] ≤ 200.

// [output] array.integer

// Array containing answer values computed as described above.

function arrayPreviousLess(items) {
  let found = false;
  let ans = [-1];
  for (let i = 1; i < items.length; i++) {
    found = false;
    for (let j = i - 1; j >= 0; j--) {
      if (items[j] < items[i]) {
        ans.push(items[j]);
        found = true;
        break;
      }
    }
    if (!found) ans.push(-1);
  }
  return ans;
}

//other answers
function arrayPreviousLess(items) {
  return items.map((a, i) => {
    for (let j = i - 1; j >= 0; j--) {
      if (items[j] < a) {
        return items[j];
      }
    }
    return -1;
  });
}

const arrayPreviousLess = (items) =>
  items.map(
    (val, idx) =>
      items
        .slice(0, idx)
        .reverse()
        .find((v) => v < val) || -1
  );
