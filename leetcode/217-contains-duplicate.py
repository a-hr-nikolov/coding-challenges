class Solution:
    def containsDuplicate(self, nums) -> bool:
        reg_unique = set([])
        for i in nums:
            if i in reg_unique:
                return True
            reg_unique.add(i)
        return False


solution = Solution()
nums = [1, 2, 3, 1]
nums2 = [1, 2, 3, 4]
nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
print(solution.containsDuplicate(nums3))
