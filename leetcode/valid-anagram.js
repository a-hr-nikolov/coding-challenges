/* 
242. Valid Anagram

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

*/

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

let s = 'rat',
  t = 'car';

console.log(isAnagram(s, t));
