""" 
Given an array of integers nums and an integer target, return indices of the two numbers
such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the 
same element twice.

You can return the answer in any order. 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
"""


def two_sum(nums, target):
    pairs = {}
    for i, n in enumerate(nums):
        complement = target - n
        if complement in pairs:
            return [i, pairs[complement]]
        pairs[n] = i
