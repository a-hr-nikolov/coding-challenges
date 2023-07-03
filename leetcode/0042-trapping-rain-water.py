from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        left = 0
        l_ahead = 1
        trapped_all = 0
        trapped_current = 0
        check_right = False

        while l_ahead < len(height):
            if height[left] > height[l_ahead]:
                trapped_current += height[left] - height[l_ahead]
            else:
                trapped_all += trapped_current
                trapped_current = 0
                left = l_ahead
                check_right = False
            if l_ahead - left > 1 and height[l_ahead] > height[l_ahead - 1]:
                check_right = True
            l_ahead += 1

        if trapped_current > 0 and check_right == True:
            right = len(height) - 1
            r_behind = right - 1
            trapped_current = 0
            while left <= r_behind:
                if height[right] > height[r_behind]:
                    trapped_current += height[right] - height[r_behind]
                else:
                    trapped_all += trapped_current
                    trapped_current = 0
                    right = r_behind
                r_behind -= 1

        return trapped_all


case1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]  # 6
case2 = [4, 2, 0, 3, 2, 5]  # 9

solution = Solution()
print(solution.trap(case2))
