// Two two-dimensional arrays are isomorphic if they have the same number of rows and each pair of respective rows contains the same number of elements.

// Given two two-dimensional arrays, check if they are isomorphic.

// Example

// For

// array1 = [[1, 1, 1],
//           [0, 0]]
// and

// array2 = [[2, 1, 1],
//           [2, 1]]
// the output should be
// areIsomorphic(array1, array2) = true;

// For

// array1 = [[2],
//           []]
// and

// array2 = [[2]]
// the output should be
// areIsomorphic(array1, array2) = false.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer array1

// Guaranteed constraints:
// 1 ≤ array1.length ≤ 5,
// 0 ≤ array1[i].length ≤ 5,
// 0 ≤ array1[i][j] ≤ 50.

// [input] array.array.integer array2

// Guaranteed constraints:
// 1 ≤ array2.length ≤ 5,
// 0 ≤ array2[i].length ≤ 5,
// 0 ≤ array2[i][j] ≤ 50.

// [output] boolean

function areIsomorphic(array1, array2) {
  if (array1.length != array2.length) return false;
  const key = [array1.length];
  const check = [array2.length];
  for (let i = 0; i < array1.length; i++) {
    key.push(array1[i].length);
    check.push(array2[i].length);
  }
  for (let i = 0; i < key.length; i++) {
    if (key[i] != check[i]) return false;
  }
  return true;
}

//other answers
function areIsomorphic(a1, a2) {
  return (
    a1.map((i) => i.length).toString() == a2.map((i) => i.length).toString()
  );
}

function areIsomorphic(array1, array2) {
  return (
    array1.length == array2.length &&
    array1.every((row, i) => array2[i].length == row.length)
  );
}

function areIsomorphic(array1, array2) {
  if (array1.length != array2.length) return false;

  for (i = 0; i < array1.length; i++)
    if (array1[i].length != array2[i].length) return false;

  return true;
}
