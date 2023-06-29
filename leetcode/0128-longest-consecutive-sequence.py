from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums)  # O(n) time, O(n) space
        longest_seq = 0
        for num in nums:  # O(n + k) time
            if num - 1 in num_set:
                continue
            length = 1
            while num + length in num_set:
                length += 1
            if longest_seq < length:
                longest_seq = length

        return longest_seq
