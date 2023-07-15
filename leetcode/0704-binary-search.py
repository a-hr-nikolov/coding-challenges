from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l = 0
        r = len(nums) - 1
        while l <= r:
            mid_point = (l + r) // 2
            if nums[mid_point] == target:
                return mid_point
            if nums[mid_point] > target:
                r = mid_point - 1
            else:
                l = mid_point + 1
        return -1
