// Reverse the order of the bits in a given integer.

// Example

// For a = 97, the output should be
// mirrorBits(a) = 67.

// 97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.

// For a = 8, the output should be
// mirrorBits(a) = 1.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer a

// Guaranteed constraints:
// 5 ≤ a ≤ 105.

// [output] integer

function mirrorBits(a) {
  //first convert our number to binary with toString(2)
  let bi = a.toString(2);
  //then we take that string and split it into an array
  //we reverse it, then join it back together
  //turn the number back into an int with parseInt
  //pass 2 into the 2nd arg of parseInt to read it
  // as a base2 number
  return parseInt(bi.split("").reverse().join(""), 2);
}

//cleaner answer
function mirrorBits(a) {
  return parseInt([...a.toString(2)].reverse().join(""), 2);
}
