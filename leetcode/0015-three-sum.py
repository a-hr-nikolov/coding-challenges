from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        three_sums = []
        nums.sort()
        i = 0

        for i, num in enumerate(nums):
            if i > 0 and num == nums[i - 1]:
                continue
            if num > 0:
                break
            left = i + 1
            right = len(nums) - 1
            while left < right:
                sum = num + nums[left] + nums[right]
                if sum > 0:
                    right -= 1
                elif sum < 0:
                    left += 1
                else:
                    three_sums.append([nums[i], nums[left], nums[right]])
                    left += 1
                    while nums[left] == nums[left - 1] and left < right:
                        left += 1

        return three_sums
