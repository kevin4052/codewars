// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/javascript

// -----------------my solution-----------------
function zero(x) { return x ? solve(x += '0') : '0'}
function one(x) { return x ? solve(x += '1') : '1'}
function two(x) { return x ? solve(x += '2') : '2'}
function three(x) { return x ? solve(x += '3') : '3'}
function four(x) { return x ? solve(x += '4') : '4'}
function five(x) { return x ? solve(x += '5') : '5'}
function six(x) { return x ? solve(x += '6') : '6'}
function seven(x) { return x ? solve(x += '7') : '7'}
function eight(x) { return x ? solve(x += '8') : '8'}
function nine(x) { return x ? solve(x += '9') : '9'}

function plus(x) { return x += '+'}
function minus(x) { return x += '-'}
function times(x) { return x += '*'}
function dividedBy(x) { return x += '/'}

function solve(x) {
  const a = +x[2];
  const b = +x[0];
  const c = x[1] === '+'
    ? a + b
    : x[1] === '-'
      ? a - b
      : x[1] === '*'
        ? a * b
        : a / b;
  
  return Math.floor(c)
}

// -----------------best practice-----------------
var n = function(digit) {
    return function(op) {
      return op ? op(digit) : digit;
    }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

// -------------------------most clever-------------------------
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

function plus(n)      { return function (a) { return a + n } }
function minus(n)     { return function (a) { return a - n } }
function times(n)     { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }