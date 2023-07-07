class Solution:
    def isValid(self, s: str) -> bool:
        expected = []
        opening_map = {"(": ")", "[": "]", "{": "}"}

        for c in s:
            if c in opening_map:
                expected.append(opening_map[c])
                continue
            if not expected:
                return False
            if c != expected.pop():
                return False

        return not expected


class Solution2:
    def isValid(self, s: str) -> bool:
        to_close = []
        closing_map = {")": "(", "]": "[", "}": "{"}
        for c in s:
            if c not in closing_map:
                to_close.append(c)
                continue
            if not to_close:
                return False
            if closing_map[c] != to_close.pop():
                return False

        return not to_close


test1 = "([])[]({})"
test2 = "([)]"
test3 = "((()"

solution = Solution2()
print(solution.isValid(test1))
