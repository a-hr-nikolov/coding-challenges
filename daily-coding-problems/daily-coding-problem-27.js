/* 

### EASY ###

Given a string of round, curly, and square open and closing brackets, return whether 
the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.

*/

const test1 = '([])[]({})';
const test2 = '([)]';
const test3 = '((()';

function checkBalance(string) {
  if (!string) return 'No string passed';

  let expected = [];
  const openingMap = new Map();
  openingMap.set('(', ')').set('[', ']').set('{', '}');

  for (let i = 0; i < string.length; i++) {
    if (openingMap.has(string[i])) {
      expected.push(openingMap.get(string[i]));
      console.log(expected);
      continue;
    }
    if (expected.length === 0) return false;
    if (string[i] !== expected.pop()) return false;
    console.log(expected);
  }

  return expected.length == 0;
}

console.log(checkBalance(test3));
