from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        max_water = 0
        while left < right:
            container_edge = min(height[left], height[right])
            volume = container_edge * (right - left)
            if max_water < volume:
                max_water = volume
            if height[left] <= height[right]:
                current = left
                left += 1
                while left < right and height[current] >= height[left]:
                    left += 1
            else:
                current = right
                right -= 1
                while left < right and height[current] >= height[right]:
                    right -= 1
        return max_water


input = [2, 3, 4, 5, 18, 17, 6]

solution = Solution()
print(solution.maxArea(input))
