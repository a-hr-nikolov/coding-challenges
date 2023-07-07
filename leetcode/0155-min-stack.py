class MinStack:
    def __init__(self):
        self.stack = []
        self.min_index = [0]
        self.latest_min_index = 0

    def push(self, val: int) -> None:
        self.stack.append(val)
        if val < self.stack[self.latest_min_index]:
            self.min_index.append(len(self.stack) - 1)
            self.latest_min_index = self.min_index[-1]

    def pop(self) -> None:
        self.stack.pop()
        if self.stack and len(self.stack) == self.latest_min_index:
            self.min_index.pop()
            self.latest_min_index = self.min_index[-1]

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        if not self.stack:
            return
        return self.stack[self.min_index[-1]]


min_stack = MinStack()
min_stack.push(-2)
print(min_stack.stack)
min_stack.push(0)
min_stack.push(-3)
