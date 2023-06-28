"""
The first solution has a O(n) space complexity and O(n log n) time complexity.
Leetcode proposes that we should have a better than O(n log n) time complex algorithm. 

The second solution addresses that issue through reverse bucket sort, which ends up with 
O(n)
"""

from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq_dict = {}
        for n in nums:
            freq_dict[n] = 1 + freq_dict.get(n, 0)

        sorted_keys = sorted(freq_dict, reverse=True, key=freq_dict.get)

        return [int(sorted_keys[i]) for i in range(k)]


class Solution2:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        """
        len(nums) + 1, because we are going to use that as a bucket, where the index of
        the array will be how many times an item has occurred in the nums list. If you
        think about it, a list can be comprised entirely of one value, meaning that it
        will have to be at index that is equal to len(nums). But since the for loop is
        0 indexed, it stops at index of len(nums) - 1. Hence the + 1 at the end.
        """
        freq_dict = {}
        freq_list = [[] for i in range(len(nums) + 1)]

        for n in nums:
            freq_dict[n] = 1 + freq_dict.get(n, 0)

        for i, c in freq_dict.items():
            freq_list[c].append(i)

        top_k = []
        # We go to > 0, because by the definition of the challenge, the 0th index
        # cannot have anything on it.
        for i in range(len(freq_list) - 1, 0, -1):
            for n in freq_list[i]:
                top_k.append(n)
                if len(top_k) == k:
                    return top_k


nums = [1, 1, 1, 2, 2, 3]
solution = Solution2()

print(solution.topKFrequent(nums, 2))
