def two_sum(nums, target):
    pairs = {}
    for i, n in enumerate(nums):
        complement = target - n
        if complement in pairs:
            return [i, pairs[complement]]
        pairs[n] = i
