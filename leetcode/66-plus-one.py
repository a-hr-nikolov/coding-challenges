from typing import List


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        if not (list):
            return digits

        position = len(digits) - 1
        while position >= -1:
            if position == -1:
                digits.insert(0, 1)
                break
            if digits[position] < 9:
                digits[position] += 1
                break
            digits[position] = 0
            position -= 1

        return digits


solution = Solution()
print(solution.plusOne([9, 9, 9]))
