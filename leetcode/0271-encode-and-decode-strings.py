class Solution:
    """
    @param: strs: a list of strings
    @return: encodes a list of strings to a single string.
    """

    def encode(self, strs):
        # write your code here
        final_str = ""
        for string in strs:
            delimiter = f"{len(string)}#"
            final_str += delimiter + string
        return final_str

    """
    @param: str: A string
    @return: decodes a single string to a list of strings
    """

    def decode(self, string):
        str_list = []
        i = 0
        while i < len(string):
            j = i
            while string[j] != "#":
                j += 1
            word_length = int(string[i:j])
            slice_start = j + 1
            slice_end = slice_start + word_length
            str_list.append(string[slice_start:slice_end])
            i = slice_end
        return str_list


solution = Solution()

inputs = ["we", "say", ":", "yes"]
encoded = solution.encode(inputs)
decoded = solution.decode(encoded)

print(f"{encoded}\n{decoded}")
