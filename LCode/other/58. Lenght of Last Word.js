// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Example 2:

// Input: s = " "
// Output: 0
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.

const lengthOfLastWord = function(s) {
    const ss = s.trim().split(' ');
    return ss[ss.length - 1].length;
};

//other answer
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};

//loop from the end of s and find len of last string first
var lengthOfLastWord = function(s) {
    let len = 0;
    let hasStarted = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') hasStarted = true;
        if (hasStarted) {
            if (s[i] === ' ') break;
            len++;
        }
    }
    return len;
};

var lengthOfLastWord = function(s) {
    let length = 0, max = 0;
    for (let i = 0; i < s.length; i++)
        if (s[i] !== ' ')
            length++, max = length;
        else
            length = 0;
    return max;
};