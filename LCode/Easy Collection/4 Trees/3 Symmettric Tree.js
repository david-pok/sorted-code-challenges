// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
//               1
//             /   \
//            2     2
//           /\     /\
//          3  4   4  3
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
//              1
//             / \
//            2   2
//             \   \
//              3   3

// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?

var isSymmetric = function (root) {
  //bfs approach
  //start with root and push into a q
  //check its children for mirror and push that into q
  //remove the root as you do so
  //then check the childrens children for mirror and push into q
  //removing their parents

  let q = [root, root];

  while (q.length) {
    let node1 = q.shift(),
      node2 = q.shift();
    if (node1 == null && node2 == null) continue;
    if (node1 == null || node2 == null) return false;
    if (node1.val !== node2.val) return false;
    q.push(node1.left, node2.right);
    q.push(node1.right, node2.left);
  }
  return true;
};

//recursive approach
var isSymmetric = function (root) {
  if (root == null) return true;

  return symmetryChecker(root.left, root.right);
};

function symmetryChecker(left, right) {
  if (left == null && right == null) return true; // If both sub trees are empty
  if (left == null || right == null) return false; // If only one of the sub trees are empty
  if (left.val !== right.val) return false; // If the values dont match up

  // Check both subtrees but travelled in a mirrored/symmetric fashion
  // (one goes left, other goes right)  and make sure they're both symmetric
  return (
    symmetryChecker(left.left, right.right) &&
    symmetryChecker(left.right, right.left)
  );
}
