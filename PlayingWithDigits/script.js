function digPow(n, p){
    let numArray = (""+n).split("");
    let digPowSum = 0;
    for (let i = 0; i < numArray.length; i++){
      digPowSum += Math.pow(numArray[i], p + i);
    }
    if(digPowSum % n === 0){
      return digPowSum / n;
    } else {
      return -1;
    }
  }