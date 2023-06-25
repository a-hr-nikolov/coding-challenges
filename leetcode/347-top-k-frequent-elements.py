from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq_dict = {}
        for n in nums:
            if str(n) in freq_dict:
                freq_dict[str(n)] += 1
            else:
                freq_dict[str(n)] = 1

        sorted_keys = sorted(freq_dict, reverse=True, key=freq_dict.get)

        return [int(sorted_keys[i]) for i in range(k)]
