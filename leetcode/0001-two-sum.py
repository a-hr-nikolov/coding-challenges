from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        pairs = {}
        for i, n in enumerate(nums):
            complement = target - n
            if complement in pairs:
                return [i, pairs[complement]]
            pairs[n] = i
