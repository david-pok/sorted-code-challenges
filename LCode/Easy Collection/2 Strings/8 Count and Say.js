// The count-and-say sequence is a sequence
// of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the
// digit string from countAndSay(n-1), which is then
// converted into a different digit string.
// To determine how you "say" a digit string,
// split it into the minimal number of groups so
// that each group is a contiguous section all of
//  the same character. Then for each group, say
//   the number of characters, then say the character.
//   To convert the saying into a digit string,
//   replace the counts with a number and
//   concatenate every saying.

// For example, the saying and conversion for digit string "3322251":
//  "33 222 5 1"
//  two 3's, three 2'screen, one 5, and one one
//  2 3   +  3 2  +  1 5  +  1 1
//   "23321511"

// Given a positive integer n, return the nth term of the count-and-say sequence.

// Example 1:

// Input: n = 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

// Constraints:

// 1 <= n <= 30
//    Hide Hint #1
// The following are the terms from n=1 to n=10 of the count-and-say sequence:
//  1.     1
//  2.     11
//  3.     21
//  4.     1211
//  5.     111221
//  6.     312211
//  7.     13112221
//  8.     1113213211
//  9.     31131211131221
// 10.     13211311123113112211
//    Hide Hint #2
// To generate the nth term, just count and say the n-1th term.

const countAndSay = function (n) {
  //start at 1 and make our way up to n
  //we have our starting off point
  //if n = 1, our string = 1
  //loop through our string
  //have a counter
  //have a 2nd pointer to keep track of same elements
  //if current iteration is the same as pointer
  //increase count
  //when they're not the same,
  //string becomes count + element
  //change the pointer to that iteration
  //count becomes 1
  //at the end of iteration we decrement n
  //return string at end
  let currentIter = "1";

  while (n > 1) {
    let nextIter = "";
    let count = 0;
    let pointer = currentIter[0];
    for (let i = 0; i < currentIter.length; i++) {
      if (currentIter[i] == pointer) {
        count++;
      } else {
        nextIter += count + pointer;
        count = 1;
        pointer = currentIter[i];
      }
    }
    currentIter = nextIter + count + pointer;
    n--;
  }
  return currentIter;
};
