from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        grouped = {}
        for str in strs:
            counted = [0] * 26
            for c in str:
                counted[ord(c) - ord("a")] += 1
            if grouped.get(tuple(counted)) is None:
                grouped[tuple(counted)] = [str]
            else:
                grouped[tuple(counted)].append(str)
        return grouped.values()
