from typing import List


class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []
        current_max = 0

        for i, h in enumerate(heights):
            start = i
            while stack and h < stack[-1][1]:
                index, height = stack.pop()
                start = index
                width = i - index
                area = height * width
                if current_max < area:
                    current_max = area
            stack.append((start, h))

        base_width = len(heights)
        for i, h in stack:
            width = base_width - i
            area = h * width
            if current_max < area:
                current_max = area

        return current_max
