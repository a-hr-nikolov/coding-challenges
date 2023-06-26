from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        grouped = {}
        for str in strs:
            sort = "".join(sorted(str))
            if grouped.get(sort) is None:
                grouped[sort] = [str]
            else:
                grouped[sort].append(str)
        return grouped.values()


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
