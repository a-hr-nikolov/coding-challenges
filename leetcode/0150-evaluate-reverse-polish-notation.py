from typing import List
import math


class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        def add(a, b):
            return a + b

        def diff(a, b):
            return a - b

        def prod(a, b):
            return a * b

        def quot(a, b):
            return math.trunc(a / b)

        operators = {"*": prod, "/": quot, "+": add, "-": diff}
        operands = []
        for t in tokens:
            if t in operators:
                operands[-2] = operators[t](operands[-2], operands[-1])
                operands.pop()
            else:
                operands.append(int(t))

        return operands[0]


tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]

solution = Solution()
print(solution.evalRPN(tokens))
