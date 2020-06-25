// my solution
function halvingSum(n) {
    let sum = n;
    let interval = n;
    let i = 1;
    if(n === 1) return n;
    while(true){
      interval = Math.floor(n / (i * 2));
      if (interval === 1 ) return sum + interval;
      else sum += interval;
       i *= 2;
    }
  }

  // best practice solution
  function halvingSum(n) {
    var sum = 0;
    while(n > 0) {
      sum += n;
      n = Math.floor(n / 2);
    }
    return sum;
  }

  // clever solution
  function halvingSum(n) {
    if(n === 1) return n;
    return n + halvingSum(Math.floor(n/2));
}