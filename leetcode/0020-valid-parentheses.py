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
            current_expected = expected.pop()
            if c != current_expected:
                return False

        return not expected


test1 = "([])[]({})"
test2 = "([)]"
test3 = "((()"

solution = Solution()
print(solution.isValid(test1))
