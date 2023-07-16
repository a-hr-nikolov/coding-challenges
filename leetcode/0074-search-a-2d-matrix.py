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


class SolutionIterative:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        ROWS, COLS = len(matrix), len(matrix[0])

        top, bot = 0, ROWS - 1
        while top <= bot:
            row = (top + bot) // 2
            if target > matrix[row][-1]:
                top = row + 1
            elif target < matrix[row][0]:
                bot = row - 1
            else:
                break

        if not (top <= bot):
            return False

        row = (top + bot) // 2
        l, r = 0, COLS - 1
        while l <= r:
            m = (l + r) // 2
            if target > matrix[row][m]:
                l = m + 1
            elif target < matrix[row][m]:
                r = m - 1
            else:
                return True
        return False
