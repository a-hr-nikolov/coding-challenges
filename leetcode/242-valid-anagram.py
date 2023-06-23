def is_anagram(s, t):
    s_array = list(s)
    s_array.sort()
    "".join(s_array)
    t_array = list(t)
    t_array.sort()
    "".join(t_array)
    if s_array == t_array:
        return True
    return False


def is_anagram_less_space(s, t):
    if len(s) != len(t):
        return False

    az_tracker = [0] * 26
    for i in range(len(s)):
        az_tracker[ord(s[i]) - ord("a")] += 1
        az_tracker[ord(t[i]) - ord("a")] -= 1

    for item in az_tracker:
        if item != 0:
            return False

    return True


s = "anagrat"
t = "nagaram"

print(is_anagram_less_space(s, t))
