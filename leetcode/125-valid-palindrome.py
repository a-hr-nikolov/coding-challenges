import re


class Solution:
    def isPalindrome(self, s: str) -> bool:
        filtered = re.sub(r"[^a-zA-Z0-9]", "", s.lower())

        start = 0
        end = len(filtered) - 1

        while start < end:
            if filtered[start] != filtered[end]:
                return False
            start += 1
            end -= 1
        return True


class Solution2:
    def isPalindrome(self, s: str) -> bool:
        filtered = filter(lambda x: x.isalnum(), s.lower())
        filtered = "".join(filtered)

        start = 0
        end = len(filtered) - 1

        while start < end:
            if filtered[start] != filtered[end]:
                return False
            start += 1
            end -= 1
        return True
