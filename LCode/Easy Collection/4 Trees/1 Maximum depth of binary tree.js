// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes
// along the longest path from the root node down to the
// farthest leaf node.

// Example 1:
//          3
//         /  \
//        9    20
//            /  \
//           15   7

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:

// Input: root = [1,null,2]
// Output: 2

// Example 3:

// Input: root = []
// Output: 0

// Example 4:

// Input: root = [0]
// Output: 1

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

const maxDepth = function (root) {
  //bfs approach
  //make a queue to put our current node and its children into
  //remove the parent node and add in the childrens childrens
  //keep a running count of depth, incrementing per removal
  //keep going until our stack goes empty
  if (!root) {
    return 0;
  }

  let q = [];
  let depth = 0;

  q.push(root);

  while (q.length > 0) {
    depth += 1;
    let temp = [];

    for (let i = 0; i < q.length; i++) {
      if (q[i].left) {
        temp.push(q[i].left);
      }
      if (q[i].right) {
        temp.push(q[i].right);
      }
    }
    q = temp;
  }
  return depth;
};
