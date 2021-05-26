// Given the head of a singly linked list,
// return true if it is a palindrome.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true

// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in
//  the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

const isPalindrome = function (head) {
  const values = [];
  let current = head;

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  const end = values.length - 1;
  for (let i = 0; i < values.length / 2; i++) {
    if (values[i] !== values[end - i]) return false;
  }

  return true;
};
