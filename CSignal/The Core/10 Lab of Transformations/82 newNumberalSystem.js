// Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.

// The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.

// Example

// For number = 'G', the output should be
// newNumeralSystem(number) = ["A + G", "B + F", "C + E", "D + D"].

// Translating this into the decimal numeral system we get: number = 6, so it is ["0 + 6", "1 + 5", "2 + 4", "3 + 3"].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] char number

// A character representing a correct one-digit number in the new numeral system.

// Guaranteed constraints:
// 'A' ≤ number ≤ 'Z'.

// [output] array.string

// An array of strings in the format "letter1 + letter2", where "letter1" and "letter2" are correct one-digit numbers in the new numeral system. The strings should be sorted by "letter1".

// Note that "letter1 + letter2" and "letter2 + letter1" are equal pairs and we don't consider them to be different.

function newNumeralSystem(number) {
  let ans = [];
  const alph = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let numb = alph.indexOf(number);
  let counter = 0;
  while (counter <= numb / 2) {
    for (let i = 0; i <= numb; i++) {
      if (counter + i == numb) {
        ans.push(alph[counter] + " + " + alph[i]);
      }
    }
    counter++;
  }
  return ans;
}

//other answers
function newNumeralSystem(number) {
  n = number.charCodeAt(0);

  r = [];
  for (i = 65; i <= n - i + 65; i++) {
    r.push(String.fromCharCode(i) + " + " + String.fromCharCode(n - i + 65));
  }

  return r;
}

function newNumeralSystem(n) {
  a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  l = [...Array(26).keys()]
    .map((i) => [...Array(26 - i).keys()].map((j) => [i, j + i]))
    .reduce((x, y) => x.concat(y));
  return l
    .filter((i) => i[0] + i[1] == a.indexOf(n))
    .map((i) => a[i[0]] + " + " + a[i[1]]);
}

function newNumeralSystem(n) {
  let l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  n = l.join("").indexOf(n);
  let out = [];
  let x = n % 2 == 0 ? n / 2 : (n - 1) / 2;
  for (let i = 0; i <= x; i++) {
    out.push(`${l[i]} + ${l[n - i]}`);
  }
  return out;
}
