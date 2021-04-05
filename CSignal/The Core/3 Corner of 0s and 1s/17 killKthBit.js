// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.

// You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number n the kth bit from the right was initially set to 0, but its current value might be different. It's now up to you to write a function that will change the kth bit of n back to 0.

// Example

// For n = 37 and k = 3, the output should be
// killKthBit(n, k) = 33.

// 3710 = 1001012 ~> 1000012 = 3310.

// For n = 37 and k = 4, the output should be
// killKthBit(n, k) = 37.

// The 4th bit is 0 already (looks like the Mad Coder forgot to encrypt this number), so the answer is still 37.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 0 ≤ n ≤ 231 - 1.

// [input] integer k

// The 1-based index of the changed bit (counting from the right).

// Guaranteed constraints:
// 1 ≤ k ≤ 31.

// [output] integer

function killKthBit(n, k) {
  //convert our number to a binary string
  //  const bi = n.toString(2);
  //put our binary string into an array
  //  const arr = [...bin];
  //reverse the array
  // arr = arr.reverse();
  //map over our array to find the kth element
  //if it is our kth element we make it 0,
  //if it isn't the kth element we keep it as is
  //k is 1 indexed while our arr is 0 indexed(hence k - 1)
  //  arr = arr.map((value, index) => index == k - 1 ? "0" : value);
  //reverse the array again back to its original
  // arr = arr.reverse();
  //make the arr into a string
  //  const str = arr.join("");
  //make the string into an int, a binary int, return it
  // return parseInt(str, 2);
  //need to make it into a 1 liner
  return parseInt(
    [...n.toString(2)]
      .reverse()
      .map((value, index) => (index === k - 1 ? "0" : value))
      .reverse()
      .join(""),
    2
  );
}

//another answer
// function killKthBit(n, k) {
//   return parseInt(
//     n
//       .toString(2)
//       .split("")
//       .map((v, i, a) => (i == a.length - k ? "0" : v))
//       .join(""),
//     2
//   );
// }

//better answer
//refer to JS bitwise logical operators
//basically says the number AND NOT (k-1) left shifted once in binary
// function killKthBit(n, k) {
//   return n & ~(1 << (k - 1));
// }
