from typing import List


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if not (nums):
            return 0

        half_point = len(nums) // 2

        if target == nums[half_point]:
            return half_point

        if half_point == 0:
            if target > nums[half_point]:
                return 1
            if target < nums[half_point]:
                return 0

        if target > nums[half_point]:
            return half_point + 1 + self.searchInsert(nums[half_point + 1 :], target)

        if target < nums[half_point]:
            return self.searchInsert(nums[:half_point], target)
