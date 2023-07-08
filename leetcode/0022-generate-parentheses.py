from typing import List


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        final = []

        def recursive(o_count, c_count, string):
            if len(string) == n * 2:
                final.append(string)
                return
            if o_count < n:
                recursive(o_count + 1, c_count, string + "(")
            if o_count > c_count:
                recursive(o_count, c_count + 1, string + ")")

        recursive(0, 0, "")

        return final


solution = Solution()
print(solution.generateParenthesis(2))
