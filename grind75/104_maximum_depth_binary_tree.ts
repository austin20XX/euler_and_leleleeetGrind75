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

function maxDepth(root: TreeNode | null): number {
  if(!root) {
      return 0;
  }

  const leftHeight = dfsHeightTrace(root.left);
  const rightHeight = dfsHeightTrace(root.right);
  return (Math.max(leftHeight, rightHeight)+1);
};

function dfsHeightTrace(root: TreeNode | null): number {
  if(root == null) {
      return 0;
  }

  const leftHeight = dfsHeightTrace(root.left);
  const rightHeight = dfsHeightTrace(root.right);

  return (Math.max(leftHeight, rightHeight)+1 ); 
}