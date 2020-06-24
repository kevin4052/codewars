function getSum( a,b ){
    let sum = 0;
    let min = Math.min(a,b);
    let max = Math.max(a,b);
     for (i = min; i <= max; i++){
       sum += i;
     }
     return sum;
  }