/* 

### MEDIUM ###

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last 
element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) 
returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.

*/

const cons = (a, b) => f => f(a, b);

const car = cb => {
  const extractA = (a, b) => a;
  return cb(extractA);
};

const cdr = cb => {
  const extractB = (a, b) => b;
  return cb(extractB);
};

console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));
