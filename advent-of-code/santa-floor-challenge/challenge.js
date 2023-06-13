const fs = require('fs');

let data = fs.readFileSync('./input.txt');
data = data.toString();

function floorCounter(data) {
  let floor = 0;
  const dataLength = data.length;
  for (let i = 0; i < dataLength; i++) {
    if (data[i] === '(') ++floor;
    else --floor;
  }
  return floor;
}

function floorCounterRecursive(data, floor = 0) {
  if (data.length < 1) return floor;
  if (data[0] === '(') return floorCounterRecursive(data.slice(1), floor + 1);
  else return floorCounterRecursive(data.slice(1), floor - 1);
}

function floorCounterMap(data) {
  return data.split('').reduce((acc, current) => {
    if (current === '(') return ++acc;
    else return --acc;
  }, 0);
}

function firstBasementChar(data) {
  let floor = 0;
  const dataLength = data.length;
  for (let i = 0; i < dataLength; i++) {
    if (data[i] === '(') ++floor;
    else --floor;
    if (floor < 0) return i + 1;
  }
  return floor;
}

console.time('Start here');
console.log(floorCounterMap(data));
console.timeEnd('Start here');
