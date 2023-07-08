from typing import List


class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        warmer_stack = [0] * len(temperatures)
        track_stack = [{"temp": temperatures[0], "index": 0}]
        for i in range(1, len(temperatures)):
            while track_stack:
                if temperatures[i] > track_stack[-1]["temp"]:
                    warmer_stack[track_stack[-1]["index"]] = (
                        i - track_stack[-1]["index"]
                    )
                    track_stack.pop()
                    continue
                break
            track_stack.append({"temp": temperatures[i], "index": i})
        while track_stack:
            warmer_stack[track_stack.pop()["index"]] = 0

        return warmer_stack


solution = Solution()

temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

print(solution.dailyTemperatures(temperatures))
