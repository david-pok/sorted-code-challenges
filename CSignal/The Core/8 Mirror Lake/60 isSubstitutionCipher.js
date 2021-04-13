// A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

// A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

// Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.

// Example

// For string1 = "aacb" and string2 = "aabc", the output should be
// isSubstitutionCipher(string1, string2) = true.

// Any ciphertext alphabet that starts with acb... would make this transformation possible.

// For string1 = "aa" and string2 = "bc", the output should be
// isSubstitutionCipher(string1, string2) = false.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string string1

// A string consisting of lowercase English characters.

// Guaranteed constraints:
// 1 ≤ string1.length ≤ 10.

// [input] string string2

// A string consisting of lowercase English characters of the same length as string1.

// Guaranteed constraints:
// string2.length = string1.length.

// [output] boolean

function isSubstitutionCipher(string1, string2) {
  //create an object to hold our ciper key
  //iterate through the strings at the same time
  //check if the current element already exists in our cipher or not
  //if it doesnt, we put it our object
  //but we have to check that string2 element doesnt already exist within the values
  //so we can get all the values from our object and check to see that string2 ele isnt in there
  //if it does, then we check to see if it the value matches our key
  //if the value matches we continue
  //if it doesnt return false
  const cipher = {};

  for (let i = 0; i < string1.length; i++) {
    const vals = Object.values(cipher);
    if (!cipher[string1[i]]) {
      if (vals.includes(string2[i])) {
        return false;
      }
      cipher[string1[i]] = string2[i];
    }
    if (cipher[string1[i]]) {
      if (cipher[string1[i]] != string2[i]) {
        return false;
      }
    }
  }
  return true;
}
//cleaner answers
// function isSubstitutionCipher(s1, s2) {
//   [s1, s2] = [s1, s2].map((s) => [...s].map((c) => s.indexOf(c)).join());
//   return s1 === s2;
// }

// function isSubstitutionCipher(string1, string2) {
//   for (let i = 0; i < string1.length; i++) {
//     let firstInx1 = string1.indexOf(string1[i]);
//     let firstInx2 = string2.indexOf(string2[i]);
//     if (string2[firstInx1] !== string2[i] || string1[firstInx2] !== string1[i])
//       return false;
//   }
//   return true;
// }

// function isSubstitutionCipher(string1, string2) {
//   var a1 = [];
//   var a2 = [];
//   for (var i = 0; i < string1.length; i++) {
//     var ind1 = a1.indexOf(string1[i]);
//     var ind2 = a2.indexOf(string2[i]);
//     if (ind1 === -1 && ind2 === -1) {
//       a1.push(string1[i]);
//       a2.push(string2[i]);
//     } else if (ind1 !== ind2) {
//       return false;
//     }
//   }
//   return true;
// }

// function isSubstitutionCipher(string1, string2) {
//   for (let i = 0; i < string1.length; i++) {
//     for (let j = 0; j < string1.length; j++) {
//       if (string1[i] === string1[j] && string2[i] !== string2[j]) {
//         return false;
//       }
//       if (string1[i] !== string1[j] && string2[i] === string2[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
