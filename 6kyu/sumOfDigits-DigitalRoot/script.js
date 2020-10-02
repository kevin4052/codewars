// my solution
const digital_root = (n) => {
    if (n < 10) {    
      return n;    
    } else {    
      let reduced = n.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
      return digital_root(reduced);    
    }  
  }

// best practice
function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
      n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
  }

// most clever
function digital_root(n) {
    return (n - 1) % 9 + 1;
  }