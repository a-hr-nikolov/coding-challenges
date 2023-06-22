""" 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or 
phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
"""


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


s = "anagram"
t = "nagaram"

print(is_anagram(s, t))
