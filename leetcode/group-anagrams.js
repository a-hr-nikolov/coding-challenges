/* 

49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer 
in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or 
phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

const groupAnagrams = stringArray => {
  const container = [[stringArray[0]]];

  outer: for (let i = 1; i < stringArray.length; i++) {
    for (let j = 0; j < container.length; j++) {
      if (isAnagram(stringArray[i], container[j][0])) {
        container[j].push(stringArray[i]);
        continue outer;
      }
    }
    container.push([stringArray[i]]);
  }

  return container;
};

const isAnagram = (stringOne, stringTwo) => {
  const reducedOne = stringOne.split('').reduce((acc, current) => {
    if (`${current}` in acc) ++acc[current];
    else acc[current] = 1;
    return acc;
  }, {});

  const reducedTwo = stringTwo.split('').reduce((acc, current) => {
    if (`${current}` in acc) ++acc[current];
    else acc[current] = 1;
    return acc;
  }, {});

  for (key in reducedOne) {
    if (reducedOne[key] !== reducedTwo[key]) return false;
  }

  for (key in reducedTwo) {
    if (reducedOne[key] !== reducedTwo[key]) return false;
  }

  return true;
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(strs));
