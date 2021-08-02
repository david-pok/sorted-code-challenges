//given a string, 's', find if the letters in s show up
//in a number of strings(in an array) in the order they appear
//return the strings that they show up in, in an array
//if no matches, return empty array

const find = [
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

const str1 = "cbazer"; //output: ["cbazer"]
const str2 = "ace"; //output: ["ace", "alpha/core", 'asdcbfdebfrdaewrzdfgr', 'asdcbfdebfrdaewrzdfegr']
const str3 = "123"; //output: ['145684580682504876408576403', 'aaodsufhoasudhfoaudhsfouadoau123', '123043585708237081702123102841023710823123123', '321321321321321321321321321']

const FuzzyFind = (s, f) => {
  let sp = 0;
  const arr = [];

  for (let i = 0; i < f.length; i++) {
    for (let j = 0; j < f[i].length; j++) {
      if (f[i][j] == s[sp]) {
        sp++;
        if (sp > s.length - 1) {
          arr.push(f[i]);
        }
      }
    }

    sp = 0;
  }
  return arr;
};

console.log(FuzzyFind(str1, find));
console.log(FuzzyFind(str2, find));
console.log(FuzzyFind(str3, find));
