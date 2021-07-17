// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:

// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

//recursive solution
const isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

//iterative solutions
//BFT
var isSameTree = function (p, q) {
  let stack = [[p, q]];

  while (stack.length) {
    let [x, y] = stack.shift();

    // if both leaves
    if (x == null && y == null) continue;
    if (!x || !y) return false;
    if (x.val == y.val) {
      stack.push([x.left, y.left]);
      stack.push([x.right, y.right]);
    } else return false;
  }
  return true;
};

var isSameTree = function (p, q) {
  let queueOne = [p];
  let queueTwo = [q];

  while (queueOne.length && queueTwo.length) {
    const currOne = queueOne.shift();
    const currTwo = queueTwo.shift();

    if (currOne && currTwo && currOne.val !== currTwo.val) {
      return false;
    }

    if (currOne && !currTwo) {
      return false;
    }

    if (currTwo && !currOne) {
      return false;
    }

    if (currOne) {
      queueOne.push(currOne.left);
      queueOne.push(currOne.right);
    }

    if (currTwo) {
      queueTwo.push(currTwo.left);
      queueTwo.push(currTwo.right);
    }
  }

  return queueOne.length === 0 && queueTwo.length === 0;
};

//DFT
var isSameTree = function (p, q) {
  const stack1 = [],
    stack2 = [];
  while (p || q || stack1.length || stack2.length) {
    while (p) {
      stack1.push(p);
      p = p.left;
    }
    while (q) {
      stack2.push(q);
      q = q.left;
    }
    p = stack1.pop();
    q = stack2.pop();
    if (!p && !q) {
      continue;
    }
    if (!p || !q || p.val !== q.val) {
      return false;
    }
    stack1.push(null);
    stack2.push(null);
    p = p.right;
    q = q.right;
  }
  return true;
};
