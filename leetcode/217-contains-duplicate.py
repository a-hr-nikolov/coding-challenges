""" 
Given an integer array nums, return true if any value appears at least twice in the 
array, and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

### CONSTRAINTS
1 <= nums.length <= 105
-109 <= nums[i] <= 109

"""


class Solution:
    def containsDuplicate(nums) -> bool:
        reg_unique = set([])
        for i in nums:
            if i in reg_unique:
                return True
            reg_unique.add(i)
        return False


nums = [1, 2, 3, 1]
nums2 = [1, 2, 3, 4]
nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
print(Solution.containsDuplicate(nums2))
