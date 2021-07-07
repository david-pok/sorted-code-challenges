// Given an array of intervals where intervals[i] = [starti, endi], 
// merge all overlapping intervals, and return an array of 
// the non-overlapping intervals that cover all the intervals 
// in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] 
// overlaps, merge them into [1,6].

// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]

// Explanation: Intervals [1,4] and [4,5] are 
// considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

var merge = function(intervals) {
    //loop through intervals
    //keep track of current lows and high
    //if the next iterations low is lower than current high
    //then next iterations high is new high and they become merged
    //if not, the current iteration stays the same, next iteration becomes low high
    let stack = [];
    
    intervals.sort((a,b) => a[0] - b[0]);
    
    stack.push(intervals[0]);
    
    for (let i = 1; i < intervals.length; i++) {
        let prev = stack.pop();
        let curr = intervals[i];
        
        if (prev[1] >= curr[0]) {
            stack.push([prev[0], Math.max(prev[1], curr[1])])
        } else stack.push(prev, curr);
    }
    return stack;
};