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
