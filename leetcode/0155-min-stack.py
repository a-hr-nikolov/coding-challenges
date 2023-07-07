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


class MinStack2:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack:
            self.min_stack.append(val)
            return
        if val < self.min_stack[-1]:
            self.min_stack.append(val)
        else:
            self.min_stack.append(self.min_stack[-1])

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        if self.min_stack:
            return self.min_stack[-1]
