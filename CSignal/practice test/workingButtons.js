// You found an old push-button phone in your room, but unfortunately some of the buttons are broken and can't be pushed anymore. To test the phone, you decided to try typing a message to your friend. Your task is to find which words of this message will be possible to type using the broken keypad.

// You are given an array of integers digits representing the set of phone buttons which are still working. You are also given an array of strings words containing the words you'd like to type in your message. Return an array of booleans, where the ith element is true if it is possible to type the ith word, and false otherwise.

// Example

// For digits = [2, 3] and words = ["abc", "gdef"], the output should be workingButtons(digits, words) = [true, false].

// Only digits 2 and 3 are still working on your phone, so only the letters a, b, c, d, e, f can be typed. It would be possible to type the first word, but not the second one - it contains the letter g, which can't be typed.

// For digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] and words = ["abc", "gdef", "x"], the output should be workingButtons(digits, words) = [true, true, true].

// All buttons are still working, so you can type any word.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer digits

// An array of integers representing the phone buttons which are still working. It is guaranteed that all digits in this array are pairwise distinct.

// Guaranteed constraints:
// 1 ≤ digits.length ≤ 10,
// 0 ≤ digits[i] ≤ 9.

// [input] array.string words

// An array of strings representing the words you'd like to type on the phone. Each word contains only lowercase English letters.

// Guaranteed constraints:
// 1 ≤ words.length ≤ 50,
// 1 ≤ words[i].length ≤ 50.

// [output] array.boolean

// Return a boolean array, where the ith element is true if it is possible to type the ith word, and false otherwise.

function workingButtons(digits, words) {
    const obj = {
        0: [],
        1: [],
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z'],
    }
    let key = [];
    let answer = [];

    for (let i = 0; i < digits.length; i++) {
        const adding = obj[digits[i]]
        key.push(...adding);
    }
    console.log('key', key)
    for (let i = 0; i < words.length; i++) {
        let counter = 0;
        const splt = words[i].split('');
        for (let j = 0; j < splt.length; j++) {
            const finder = key.find(elem => elem == splt[j]);
            if (finder != undefined) counter++;
        }
        if (counter == splt.length) {
            answer.push(true);
        } else answer.push(false);
    }
    return answer;
}
