// Merge two sorted linked lists and return it as a
// sorted list. The list should be made by splicing
// together the nodes of the first two lists.

// Example 1:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: l1 = [], l2 = []
// Output: []

// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is
//  in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

const mergeTwoLists = function (l1, l2) {
  //initialize our own fake head
  //constantly make a comparison to which value is smaller in both lists
  //smaller value will be the next value of our fake head
  //then the head of that respective list should be whatever was next in line
  //keep looping until one of the lists are gone
  //if there is leftover on a list we add it to the end of our merged
  let head = new ListNode();

  let current = head;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      current.next = l2;
      l2 = l2.next;
      current = current.next;
    } else {
      current.next = l1;
      l1 = l1.next;
      current = current.next;
    }
  }
  current.next = l1 || l2;
  return head.next;
};
