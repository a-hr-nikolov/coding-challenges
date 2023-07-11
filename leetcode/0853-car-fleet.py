from typing import List


class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        combined = [[p, s] for p, s in zip(position, speed)]
        combined = sorted(combined, reverse=True, key=lambda x: x[0])
        pointer = (target - combined[0][0]) / combined[0][1]
        fleets = 1

        print(combined)

        for p, s in combined:
            time_to_reach = (target - p) / s
            if pointer < time_to_reach:
                fleets += 1
                pointer = time_to_reach

        return fleets


class Solution2:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        times = [
            (target - p) / s for p, s in sorted(zip(position, speed), reverse=True)
        ]
        fleets = pointer = 0

        for t in times:
            if pointer < t:
                fleets += 1
                pointer = t

        return fleets


# target = 12
# position = [10, 8, 0, 5, 3]
# speed = [2, 4, 1, 1, 3]

target = 10
position = [0, 4, 2]
speed = [2, 1, 3]
# should be 1 now


solution = Solution2()
print(solution.carFleet(target, position, speed))
