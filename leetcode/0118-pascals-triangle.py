from typing import List


class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []

        my_list = [[1], [1, 1]]

        if numRows == 1:
            return my_list[:-1]
        if numRows == 2:
            return my_list

        for i in range(1, numRows - 1):
            j = 0
            k = 1
            new_row = [1]
            while k <= i:
                new_row.append(my_list[i][j] + my_list[i][k])
                j += 1
                k += 1
            new_row.append(1)
            my_list.append(new_row)

        return my_list
