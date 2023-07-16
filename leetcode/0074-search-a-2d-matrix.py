from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if len(matrix) == 0:
            return False

        if len(matrix) == 1:
            ref = matrix[0]
            l = 0
            r = len(ref) - 1
            while l <= r:
                mid_point = (l + r) // 2
                if ref[mid_point] == target:
                    return True
                if ref[mid_point] > target:
                    r = mid_point - 1
                else:
                    l = mid_point + 1
            return False

        mid_point = len(matrix) // 2
        if target == matrix[mid_point][0]:
            return True
        elif target > matrix[mid_point][0]:
            return self.searchMatrix(matrix[mid_point:], target)
        else:
            return self.searchMatrix(matrix[:mid_point], target)
