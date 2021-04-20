// Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

// Given the first element a0, find the length of the sequence.

// Example

// For a0 = 16, the output should be
// squareDigitsSequence(a0) = 9.

// Here's how elements of the sequence are constructed:

// a0 = 16
// a1 = 12 + 62 = 37
// a2 = 32 + 72 = 58
// a3 = 52 + 82 = 89
// a4 = 82 + 92 = 145
// a5 = 12 + 42 + 52 = 42
// a6 = 42 + 22 = 20
// a7 = 22 + 02 = 4
// a8 = 42 = 16, which has already occurred before (a0)
// Thus, there are 9 elements in the sequence.

// For a0 = 103, the output should be
// squareDigitsSequence(a0) = 4.

// The sequence goes as follows: 103 -> 10 -> 1 -> 1, 4 elements altogether.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer a0

// First element of a sequence, positive integer.

// Guaranteed constraints:
// 1 ≤ a0 ≤ 105.

// [output] integer

function squareDigitsSequence(a0) {
  //create object key to keep track of occurences
  //keep a running count
  //toString and split each number, then map Number them back into an int
  //multiply each number by itself and find the sum of two numbers
  //check it against our object key, if its in there we end it and return the count
  //if not then we add it in and continue process of splitting and mathing
  const obj = {};
  let count = 1;
  let running = true;

  while (running) {
    if (!obj[a0]) {
      obj[a0] = true;
      const split = a0.toString().split("").map(Number);
      let sum = 0;
      for (let i = 0; i < split.length; i++) {
        sum += split[i] * split[i];
      }
      a0 = sum;
      count++;
    } else return count;
  }
}

//other answers
function squareDigitsSequence(a0) {
  let used = new Set();

  while (!used.has(a0)) {
    used.add(a0);
    a0 = a0
      .toString()
      .split("")
      .map((x) => parseInt(x) ** 2)
      .reduce((a, b) => a + b);
  }

  return used.size + 1;
}

function squareDigitsSequence(a0) {
  let curr = a0;
  let prev = [];
  while (prev.indexOf(curr) === -1) {
    prev.push(curr);
    let next = 0;
    while (curr > 0) {
      next += (curr % 10) * (curr % 10);
      curr = Math.floor(curr / 10);
    }
    curr = next;
  }
  return prev.length + 1;
}

function squareDigitsSequence(a0) {
  let a_n = a0;
  let count = 0;
  const set = new Set();
  do {
    aPrev = a_n;
    let digitsSquared = 0;
    while (a_n !== 0) {
      digitsSquared += (a_n % 10) ** 2;
      a_n = Math.floor(a_n / 10);
    }
    count++;
    a_n = digitsSquared;

    if (set.has(a_n)) {
      break;
    }
    set.add(a_n);
  } while (a_n !== a0);

  return count + 1;
}

function squareDigitsSequence(a0) {
  a = a0;
  count = 1;
  arr = [a];
  while (true) {
    count++;
    s = 0;
    while (a > 0) {
      s += Math.pow(a % 10, 2);
      a = Math.floor(a / 10);
    }
    a = s;
    if (arr.indexOf(a) === -1) arr.push(a);
    else return count;
  }
}
