/* 

1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers
such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the 
same element twice.

You can return the answer in any order. 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

function twoSum(array, num) {
  const possiblePairs = new Map();

  for (let i = 0; i < array.length; i++) {
    const pair = num - array[i];
    if (possiblePairs.has(pair)) return [possiblePairs.get(pair), i];
    else possiblePairs.set(array[i], i);
  }
}

const testArray = [10, 15, 3, 7];
const testNum = 18;

console.log(twoSum(testArray, testNum));
