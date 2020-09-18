// my solution
const findOdd = numArray => {
    let map = {};
    
    numArray.forEach(num => {
      (map[num]) ? map[num]++ : map[num] = 1;
    });
    
    return Object.keys(map).reduce((a, b) => {
      return a = (map[b] % 2 !== 0) ? +b : +a;
    }, 0);
      
  }

// best practice
function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }

// most clever
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);