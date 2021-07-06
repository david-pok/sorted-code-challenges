// Harold is a kidnapper who wrote a ransom note, 
// but now he is worried it will be traced back 
// to him through his handwriting. He found a 
// magazine and wants to know if he can cut out 
// whole words from it and use them to create an 
// untraceable replica of his ransom note. The 
// words in his note are case-sensitive and he 
// must use only whole words available in the 
// magazine. He cannot use substrings or 
// concatenation to create the words he needs.

// Given the words in the magazine and the words 
// in the ransom note, print Yes if he can 
// replicate his ransom note exactly using 
// whole words from the magazine; otherwise, print No.


// Example

// magazine = "attack at dawn"
// note = "Attack at dawn"

// The magazine has all the right words, but 
// there is a case mismatch. The answer is No.


// Function Description

// Complete the checkMagazine function in the 
// editor below. It must print Yes if the note 
// can be formed using the magazine, or No.

// checkMagazine has the following parameters:

// string magazine[m]: the words in the magazine
// string note[n]: the words in the ransom note


// Prints

// string: either Yes or No, no return value is expected


// Input Format

// The first line contains two space-separated 
// integers, m and n, the numbers of words in 
// the magazine and the note, respectively.

// The second line contains m space-separated 
// strings, each magazine[i].

// The third line contains n space-separated strings, each note[i].


// Constraints

// 1 <= m,n <= 30000
// 1 <= lengths of magazine[i] and note[i] <= 5

// Each word consists of English alphabetic 
// letters (i.e., a to z and A to Z).


// Sample Input 0

// 6 4
// give me one grand today night
// give one grand today

// Sample Output 0

// Yes


// Sample Input 1

// 6 5
// two times three is not four
// two times two is four

// Sample Output 1

// No


// Explanation 1

// 'two' only occurs once in the magazine.


// Sample Input 2

// 7 4
// ive got a lovely bunch of coconuts
// ive got some coconuts

// Sample Output 2

// No

// Explanation 2

// Harold's magazine is missing the word some.

function checkMagazine(magazine, note) {
    // console.log(magazine);
    // console.log(note);
    // Write your code here
   // give me one grand today night
   // give one grand today
   
   //take note and extrapolate into a hash map
   //each value in the hash map will be a count of each word
   //loop through magazine and count down on each hash map item
   // that correlates
   //if all values are equal to 0 than print Yes
   
   //another solution
   //keep a pointer on note
   //loop through magazine
   //if pointer matches magazine elem
   //continue pointer and re loop
   //if not return no
   let vals = {};
   
   for (let word in note) {
       vals[note[word]] = vals[note[word]]+1 || 1;
   }
   
   for (let word in magazine) {
       if (vals[magazine[word]] !== undefined) {
           vals[magazine[word]] -= 1;
       }
   }
   
   for (let count in vals) {
       if (vals[count] > 0) {
           console.log("No");
           return;
       }
   }
   console.log("Yes");
}