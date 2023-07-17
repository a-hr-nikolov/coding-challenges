from typing import List


class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l, r = 1, max(piles)
        k = r

        while l <= r:
            mid = (l + r) // 2
            total_loops = 0

            for pile in piles:
                total_loops += (pile - 1) // mid + 1
                if total_loops > h:
                    break

            if total_loops <= h:
                k = min(k, mid)
                r = mid - 1
            else:
                l = mid + 1

        return k
