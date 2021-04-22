// You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.

// Example

// For s = "AABAA" and t = "BBAAA", the output should be
// createAnagram(s, t) = 1;
// For s = "OVGHK" and t = "RPGUC", the output should be
// createAnagram(s, t) = 4.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// Guaranteed constraints:
// 5 ≤ s.length ≤ 35.

// [input] string t

// Guaranteed constraints:
// t.length = s.length.

// [output] integer

// The minimum number of replacement operations needed to get an anagram of the string t from the string s.

function createAnagram(s, t) {
  let counter = 0;
  while (counter < s.length) {
    t = t.replace(s[counter], "");
    counter++;
  }
  return t.length;
}

//other answers
function createAnagram(s, t) {
  for (let x of s) {
    t = t.replace(x, "");
  }
  return t.length;
}

function createAnagram(s, t) {
  const str1 = s.split("");
  const str2 = t.split("");
  str1.forEach((char) => {
    const index = str2.indexOf(char);
    if (index >= 0) {
      str2.splice(index, 1);
    }
  });
  return str2.length;
}

function createAnagram(s, t) {
  // Transform strings into array to make use of their methods.
  let sArray = s.split("");
  let tArray = t.split("");

  for (let i = 0; i < sArray.length; i++) {
    for (let j = 0; j < tArray.length; j++) {
      if (sArray[i] === tArray[j]) {
        tArray.splice(j, 1);
        break;
      }
    }
  }

  return tArray.length;
}
