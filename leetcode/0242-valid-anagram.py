class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        az_tracker = [0] * 26
        for i in range(len(s)):
            az_tracker[ord(s[i]) - ord("a")] += 1
            az_tracker[ord(t[i]) - ord("a")] -= 1

        for item in az_tracker:
            if item != 0:
                return False

        return True
