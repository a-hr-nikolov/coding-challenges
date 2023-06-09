/* 

### HARD ###

Given an array of integers, return a new array such that each element at index i of 
the new array is the product of all the numbers in the original array except the one 
at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be 
[120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be 
[2, 3, 6].

Follow-up: what if you can't use division? 

*/

// * Using division

function multiplyOneAnother(array) {
  const product = array.reduce((acc, current) => acc * current, 1);
  return array.map(item => product / item);
}

// * Not using division

function multiplyOneAnother_NoDiv(array) {
  for (let i = 0; i < array.length; i++) {}

  return array.map((item, index) =>
    array.reduce((acc, current, i) => {
      if (index !== i) return acc * current;
      return acc;
    }, 1)
  );
}

const testArray = [1, 2, 3, 4, 5];
console.log(multiplyOneAnother_NoDiv(testArray));
