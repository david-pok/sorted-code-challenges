// Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.

// It is guaranteed that there is at least one tooth at each end of the comb.
// It is also guaranteed that the total length of two strings is smaller than 32.
// Note, that the combs can not be rotated/reversed.

// Example

// For comb1 = "*..*" and comb2 = "*.*", the output should be
// combs(comb1, comb2) = 5.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string comb1

// A comb is represented as a string. If there is an asterisk ('*') in the ith position, there is a tooth there. Otherwise there is a dot ('.'), which means there is a missing tooth on the comb.

// Guaranteed constraints:
// 3 ≤ comb1.length ≤ 8.

// [input] string comb2

// The second comb is represented in the same way as the first one.

// Guaranteed constraints:
// 1 ≤ comb2.length ≤ 5.

// [output] integer

// The minimum length of a purse Miss X needs.

function combs(comb1, comb2) {
    const len1 = comb1.length;
    const len2 = comb2.length;
    let count = 0;
    for ( let i = 0; i < len1; i++) {
        if (comb1[i] == ".") count++
        if (count >= len2) return len1;
        if (comb1[i] == "*") count = 0;
    }
    return len1 + len2 - 2;
}
//in progres...