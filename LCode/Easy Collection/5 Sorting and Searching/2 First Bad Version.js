// You are a product manager and currently leading
// a team to develop a new product. Unfortunately, 
// the latest version of your product fails the 
// quality check. Since each version is developed 
// based on the previous version, all the versions 
// after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and 
// you want to find out the first bad one, which 
// causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) 
// which returns whether version is bad. Implement 
// a function to find the first bad version. You 
// should minimize the number of calls to the API.

 

// Example 1:

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// Example 2:

// Input: n = 1, bad = 1
// Output: 1
 

// Constraints:

// 1 <= bad <= n <= 231 - 1

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //keep track of start and end we change start or end everytime we cut in half
        //keep track of difference of start and end, mid point will be Math.floor(difference / 2)
        //either add that to start or subtract from end to find mid
        //cut the versions in half and check the mid point
        //if mid is bad then we check the lower half
        //if mid is good then we check the upper half
        //cut again and check mid and repeat until ... maybe the difference between end and start is 1
        
        //maybe if differece is 2 we just check the middle if bad
        
    };
};