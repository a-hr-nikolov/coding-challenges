from typing import List


class Solution2:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        acc = 1
        output = [1] * len(nums)
        for i in range(len(nums)):
            output[i] = acc
            acc *= nums[i]

        acc = 1
        for i in range(len(nums) - 1, -1, -1):
            output[i] *= acc
            acc *= nums[i]

        return output


solution = Solution2()

some_list = [1, 2, 3, 4]

print(solution.productExceptSelf(some_list))
