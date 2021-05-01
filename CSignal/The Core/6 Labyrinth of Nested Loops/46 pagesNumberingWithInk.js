// You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page of the book is that you can number given the current page and numberOfDigits left. A page is considered numbered if it has the full number printed on it (e.g. if we are working with page 102 but have ink only for two digits then this page will not be considered numbered).

// It's guaranteed that you can number the current page, and that you can't number the last one in the book.

// Example

// For current = 1 and numberOfDigits = 5, the output should be
// pagesNumberingWithInk(current, numberOfDigits) = 5.

// The following numbers will be printed: 1, 2, 3, 4, 5.

// For current = 21 and numberOfDigits = 5, the output should be
// pagesNumberingWithInk(current, numberOfDigits) = 22.

// The following numbers will be printed: 21, 22.

// For current = 8 and numberOfDigits = 4, the output should be
// pagesNumberingWithInk(current, numberOfDigits) = 10.

// The following numbers will be printed: 8, 9, 10.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer current

// A positive integer, the number on the current page which is not yet printed.

// Guaranteed constraints:
// 1 ≤ current ≤ 1000.

// [input] integer numberOfDigits

// A positive integer, the number of digits which your printer can print.

// Guaranteed constraints:
// 1 ≤ numberOfDigits ≤ 1000.

// [output] integer

// The last printed page number.

function pagesNumberingWithInk(current, numberOfDigits) {
  // keep track of current and increment it every iteration
  // keep track of the length of digits of current and subtract that from numberOfDigits every iteration
  // keep this going until the length of current is larger than numberOfDigits

  while (numberOfDigits > 1) {
    const len = current.toString().length;
    numberOfDigits -= len;
    if (len > numberOfDigits) return current;
    current++;
  }
  return current;
}

//other answers
function pagesNumberingWithInk(current, numberOfDigits) {
  while (numberOfDigits >= current.toString().length) {
    numberOfDigits -= current.toString().length;
    current++;
  }
  return current - 1;
}

const pagesNumberingWithInk = (c, d) => {
  while ((d -= String(c++).length) >= 0);

  return c - 2;
};
