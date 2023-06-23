from types import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        unique_count = 0
        last_index = 0
        for i in range(1, len(nums)):
            if nums[last_index] == nums[i]:
                continue
            unique_count += 1
            nums[unique_count] = nums[i]
            last_index = i
        return unique_count + 1
