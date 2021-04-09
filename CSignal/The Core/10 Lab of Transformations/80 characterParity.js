// Given a character, check if it represents an odd digit, an even digit or not a digit at all.

// Example

// For symbol = '5', the output should be
// characterParity(symbol) = "odd";
// For symbol = '8', the output should be
// characterParity(symbol) = "even";
// For symbol = 'q', the output should be
// characterParity(symbol) = "not a digit".
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] char symbol

// A symbol to check.

// Guaranteed constraints:
// symbol is guaranteed to be a UTF-8 symbol.

// [output] string

function characterParity(symbol) {
  const inted = parseInt(symbol);
  if (inted % 2 == 0) {
    return "even";
  } else if (inted % 2 == 1) {
    return "odd";
  } else return "not a digit";
}

//another answer
function characterParity(symbol) {
  if (symbol >= "0" && symbol <= "9") {
    return symbol % 2 == 0 ? "even" : "odd";
  }
  return "not a digit";
}
