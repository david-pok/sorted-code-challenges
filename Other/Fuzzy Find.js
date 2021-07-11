//given a string, 's', find if the letters in s show up
//in a number of strings(in an array) in the order they appear
//return the strings that they show up in, in an array

const s1 = "cbazer";
const s2 = "ace";
const s3 = "123";

const f = [
  "fff/eee",
  "ace",
  "alpha/core",
  "ac1",
  "asdfc",
  "cbazer",
  "asdcbfdebfrdaewrzdfgr",
  "asdcbfdebfrdaewrzdfegr",
  "145684580682504876408576403",
  "aaodsufhoasudhfoaudhsfouadoau123",
  "123043585708237081702123102841023710823123123",
  "321321321321321321321321321",
];

const FuzzyFind = (s, f) => {
  let sp = 0;
  const arr = [];

  for (let i = 0; i < f.length; i++) {
    for (let j = 0; j < f[i].length; j++) {
      if (f[i][j] == s[sp]) {
        sp++;
      }
    }
    if (sp > s.length - 1) {
      arr.push(f[i]);
    }
    sp = 0;
  }
  return arr;
};

console.log(FuzzyFind(s1, f));
console.log(FuzzyFind(s2, f));
console.log(FuzzyFind(s3, f));
