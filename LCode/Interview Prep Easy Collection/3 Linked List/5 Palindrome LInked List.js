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

//more effecient answer
const isPalindrome = function (head) {
  //init a slow and a fast pointer
  //fast pointer will move twice the speed of slow
  //when the fast pointer reaches the end,
  //the slow pointer has reached the middle
  //now that we know where the middle is,
  //we reverse the second half of the list
  //we use a 3 pointer/variable system to juggle
  //the 2nd half of the list to reverse it
  //one of the variables will be a prev
  //make sure to set prev.next to null
  //once the 2nd half of list is reversed and the
  //slow pointer is at the very end
  //we check the values until we reach the middle
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // console.log(fast, 'fast');
  // console.log(slow, 'slow');
  let temp;
  let prev = slow;
  slow = slow.next;
  prev.next = null;

  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  fast = head;
  slow = prev;
  
  while (slow) {
    if (fast.val != slow.val) return false;
    else {
      fast = fast.next;
      slow = slow.next;
    }
  }
  return true;
};
