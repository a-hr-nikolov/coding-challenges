console.time('Resetter');

function pow(x, n) {
  if (n == 1) return x;
  return x * pow(x, n - 1);
}

let company = {
  sales: [
    {
      name: 'John',
      salary: 1000,
    },
    {
      name: 'Alice',
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: 'Peter',
        salary: 2000,
      },
      {
        name: 'Alex',
        salary: 1800,
      },
    ],

    internals: [
      {
        name: 'Jack',
        salary: 1300,
      },
    ],
  },
};

function traverse(object) {
  if (Array.isArray(object)) {
    return object.reduce((acc, item) => acc + item.salary, 0);
  }
  let sum = 0;
  for (let key in object) {
    sum += traverse(object[key]);
  }
}

function factorial(n) {
  if (n === 0) return 1;
  if (n < 0) return 'invalid';
  if (n <= 1) return n;
  return n * factorial(n - 1);
}

function fibonacciSequence(length) {
  if (length === 1) {
    return [0];
  } else if (length === 2) {
    return [0, 1];
  } else {
    let sequence = fibonacciSequence(length - 1);
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
    return sequence;
  }
}

function printFibonacciSequence(length) {
  let sequence = fibonacciSequence(length);
  for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
  }
}

function collatz(n) {
  if (n <= 0) return console.log('error');
  if (n === 1) return 0;
  let sum = 0;
  if (n % 2 === 0) {
    return 1 + collatz(n / 2);
  }

  if (n % 2 === 1) {
    return 1 + collatz(3 * n + 1);
  }
}

function sumRange(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return n + sumRange(n - 1);
}

function all(array, callback) {
  if (array.length <= 0) return 'Undefined';
  let condition = true;
  if (array.length > 1) condition = all(array.slice(0, -1), callback);
  if (!condition) return false;
  if (callback(array[array.length - 1])) return true;
  return false;
}

function allExternal(array, callback) {
  var copy = copy || array.slice(); // shallow copies array

  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift(); // remove first element from array
    return allExternal(copy, callback);
  } else {
    return false;
  }
}

function productOfArray(array) {
  if (array.length <= 1) return 1;
  return array[array.length - 1] * productOfArray(array.slice(0, -1));
}

function productOfArray2(array) {
  if (array.length <= 0) return 1;
  return array.pop() * productOfArray2(array);
}

function contains(object, searched) {
  for (let value of Object.values(object)) {
    if (typeof value === 'object' && value !== null)
      return contains(value, searched);
    if (value === searched) return true;
  }
  return false;
}

function totalIntegers(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let lastItem = array.pop();
  if (Array.isArray(lastItem)) total += totalIntegers(lastItem);
  else if (Number.isInteger(lastItem)) total++;
  return total + totalIntegers(array);
}

function sumSquares(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let lastItem = array.pop();
  if (Array.isArray(lastItem)) total += sumSquares(lastItem);
  else if (typeof lastItem === 'number') total += lastItem ** 2;
  return total + sumSquares(array);
}

function replicate(base, repeat) {
  let array = [];
  if (repeat <= 0) return array;
  if (repeat > 1) array.push(...replicate(base, repeat - 1));
  array.push(base);
  return array;
}

function mergeAlg(array) {
  if (array.length === 0) return [];
  if (array.length === 1) return [array[0]];
  const splitter = Math.floor(array.length / 2);
  const halfOne = [...mergeAlg(array.slice(0, splitter))];
  const halfTwo = [...mergeAlg(array.slice(splitter))];
  const joined = [];

  while (halfOne.length !== 0 && halfTwo.length !== 0) {
    if (halfOne[0] < halfTwo[0]) {
      joined.push(halfOne.shift());
    } else joined.push(halfTwo.shift());
  }

  return [...joined, ...halfOne, ...halfTwo];
}

let unsorted = [2, 8, 1, 3, 6, 7, 5, 4];
let unsorted2 = [2, 1];
let unsorted3 = [
  32, 146, 125, 44, 135, 45, 5, 63, 139, 65, 14, 25, 36, 130, 93,
];

console.log(mergeAlg(unsorted3));
