// Given the root of a binary tree,
// return the level order traversal of
// its nodes' values.
// (i.e., from left to right, level by level).

// Example 1:
//                 3
//                / \
//               9   20
//                   / \
//                  15  7

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:

// Input: root = [1]
// Output: [[1]]

// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

const levelOrder = function (root) {
  if (!root) return [];

  let q = [root];
  let ans = [[root.val]];

  while (q.length) {
    let temp = [];
    let vals = [];
    for (let i = 0; i < q.length; i++) {
      if (q[i].left) {
        temp.push(q[i].left);
        vals.push(q[i].left.val);
      }
      if (q[i].right) {
        temp.push(q[i].right);
        vals.push(q[i].right.val);
      }
    }
    q = temp;
    if (vals.length) ans.push(vals);
  }
  return ans;
};
