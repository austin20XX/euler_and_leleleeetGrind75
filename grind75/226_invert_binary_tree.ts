/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function invertTree(root: TreeNode | null): TreeNode | null {
  // A DFS recursive switcheroo

  // Base case
  if(!root) {
      return root;
  }

  const placeHolderNode: TreeNode = root.right;
  root.right = root.left;
  root.left = placeHolderNode;

  invertTree(root.right);
  invertTree(root.left);

  return root;
};