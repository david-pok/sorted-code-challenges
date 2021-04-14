// Proper nouns always begin with a capital letter, followed by small letters.

// Correct a given proper noun so that it fits this statement.

// Example

// For noun = "pARiS", the output should be
// properNounCorrection(noun) = "Paris";
// For noun = "John", the output should be
// properNounCorrection(noun) = "John".
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string noun

// A string representing a proper noun with a mix of capital and small English letters.

// Guaranteed constraints:
// 1 ≤ noun.length ≤ 10.

// [output] string

// Corrected (if needed) noun.

function properNounCorrection(noun) {
  let first = noun[0];
  let second = noun.slice(1);
  return first.toUpperCase() + second.toLowerCase();
}

//other answers
function properNounCorrection(noun) {
  return noun[0].toUpperCase() + noun.slice(1).toLowerCase();
}