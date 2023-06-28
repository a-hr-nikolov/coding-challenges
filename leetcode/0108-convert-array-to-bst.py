from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if not (nums):
            return
        half_index = len(nums) // 2
        return TreeNode(
            nums[half_index],
            self.sortedArrayToBST(nums[:half_index]),
            self.sortedArrayToBST(nums[half_index + 1 :]),
        )
