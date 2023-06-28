from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        accumulator = nums[0]
        for i in range(1, len(nums)):
            accumulator = accumulator ^ nums[i]
        return accumulator
