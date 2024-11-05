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

function isBalanced(root: TreeNode | null): boolean {
  if(!root) {
      return true;
  }

  const left = checkBalanceAndHeight(root.left);
  const right = checkBalanceAndHeight(root.right);
  const heightDifference = Math.abs(left.height - right.height);
  return (right.isBalanced && left.isBalanced && heightDifference <= 1);
};

function checkBalanceAndHeight(root: TreeNode | null): {height: number, isBalanced: boolean} {
  if(root == null) {
      return { height: 0, isBalanced: true};
  }

  const left = checkBalanceAndHeight(root.left);
  const right = checkBalanceAndHeight(root.right);
  const heightDifference: number =  Math.abs(left.height - right.height);

  return ({height: Math.max(left.height, right.height)+1, isBalanced: (heightDifference <= 1) && left.isBalanced && right.isBalanced }); 
}