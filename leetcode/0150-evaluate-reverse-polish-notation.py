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


class Solution2:
    def evalRPN(self, tokens: List[str]) -> int:
        operands = []
        for t in tokens:
            if t == "+":
                operands.append(operands.pop() + operands.pop())
            elif t == "-":
                a, b = operands.pop(), operands.pop()
                operands.append(b - a)
            elif t == "*":
                operands.append(operands.pop() * operands.pop())
            elif t == "/":
                a, b = operands.pop(), operands.pop()
                operands.append(int(b / a))
            else:
                operands.append(int(t))

        return operands[0]


tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]

solution = Solution2()
print(solution.evalRPN(tokens))
