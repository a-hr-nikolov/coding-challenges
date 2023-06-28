from typing import List


class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        my_list = [[1], [1, 1]]

        if rowIndex == 0:
            return my_list[0]
        if rowIndex == 1:
            return my_list[1]

        for i in range(1, rowIndex):
            j = 0
            k = 1
            new_row = [1]
            while k <= i:
                new_row.append(my_list[i][j] + my_list[i][k])
                j += 1
                k += 1
            new_row.append(1)
            my_list.append(new_row)

        return my_list[rowIndex]
