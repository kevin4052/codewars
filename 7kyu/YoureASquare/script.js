// my solution
var isSquare = function(n){
    return (n < 0) ? false: !(Math.sqrt(n) % 1) ? true : false;
  }
// best practice
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }

// most clever
const isSquare = n => Number.isInteger(Math.sqrt(n));