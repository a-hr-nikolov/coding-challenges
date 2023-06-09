/** 

### EASY ###

Given a list of numbers and a number k, return whether any two numbers from the list 
add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?


### Comments below formatted with Better Comments ###

*??? I am not entirely sure what "one pass" means in this context. Does it mean linear 
*??? time? Or does it mean going through the array only once?

** I will provide two implementations - one with a set, and another with a sorted
** array where we can iterate on both ends of the array.

 */

function canAddTo_sort(array, num) {
  const sorted = array.sort();

  let i = 0;
  let j = sorted.length - 1;

  while (i < j) {
    if (sorted[i] + sorted[j] === num) return true;
    if (sorted[i] + sorted[j] < num) ++i;
    else --j;
  }

  return false;
}

function canAddTo_set(array, num) {
  const possiblePairs = new Set();

  for (let item of array) {
    const pair = num - item;

    if (possiblePairs.has(pair)) return true;

    possiblePairs.add(item);
  }
  return false;
}

const testArray = [10, 15, 3, 7];
const testNum = 19;

console.log(canAddTo_sort(testArray, testNum));
