// Given the head of a linked list, remove the nth
// node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:

// Input: head = [1], n = 1
// Output: []

// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  //2 pointer approach, one slow one fast
  //we are looking for the nth from the end
  //so we start the fast pointer on n
  //increment both at the same time until the fast reaches the end
  //this will mean the slow pointer will find the nth from the end
  //once we find it we can just remove that node, link the rest,  and return it

  let slow = head;
  let fast = head;

  while (n--) fast = fast.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  
  if (!fast) head = head.next;
  else slow.next = slow.next.next;

  return head;
};
