// Given two strings s and t, return true
// if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode
// characters? How would you adapt your solution
//  to such a case?

const isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] + 1 || 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!obj[t[i]]) {
      return false;
    } else obj[t[i]]--;
  }
  for (x in obj) {
    if (obj[x] != 0) return false;
  }
  return true;
};

//other answers

function isAnagram(s, t) {
  const map = {};
  s.split("").map((c) => (map[c] = map[c] ? map[c] + 1 : 1));
  t.split("").map((c) => (map[c] = map[c] ? map[c] - 1 : -1));
  return Object.keys(map).every((k) => map[k] === 0);
}

var isAnagram = function (s, t, m = {}) {
  for (let c of s) m[c] = (m[c] || 0) + 1;
  for (let c of t) if (!m[c]--) return false;
  return Object.values(m).every((v) => !v);
};

var isAnagram = function (s, t) {
  if (t.length !== s.length) return false;
  const counts = [];
  for (let c of s) {
    let i = c.charCodeAt(0) - "a".charCodeAt(0);
    counts[i] = (counts[i] || 0) + 1;
  }
  for (let c of t) {
    let i = c.charCodeAt(0) - "a".charCodeAt(0);
    if (!counts[i]) return false;
    counts[i]--;
  }
  return true;
};

var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

var isAnagram = function (s, t) {
  const a = s.split("").sort(),
    b = t.split("").sort();
  while (a.length && b.length) {
    if (a.pop() !== b.pop()) {
      return false;
    }
  }
  return a.length || b.length ? false : true;
};
