""" 
You are given two strings word1 and word2. Merge the strings by adding letters in 
alternating order, starting with word1. If a string is longer than the other, append the 
additional letters onto the end of the merged string.

Return the merged string. 
"""
from collections import deque


class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        new_list = []

        for i in range(max(len(word1), len(word2))):
            if i < len(word1):
                new_list.append(word1[i])
            if i < len(word2):
                new_list.append(word2[i])

        return "".join(new_list)


from collections import deque


class SolutionDeque:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        deque1 = deque(word1)
        deque2 = deque(word2)
        dequeMerged = deque([])

        while deque1 and deque2:
            dequeMerged.append(deque1.popleft())
            dequeMerged.append(deque2.popleft())

        return "".join([*dequeMerged, *deque1, *deque2])
