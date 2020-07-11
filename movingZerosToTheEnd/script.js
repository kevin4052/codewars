//my solution
var moveZeros = function (arr) {
    let nonZero = [];
    let zero = [];
    arr.forEach(ele => {
      if(ele === 0) zero.push(ele);
      else nonZero.push(ele);
    })
    
    return nonZero.concat(zero);
  }

  //best practice
  var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num){return num !== 0;});
    var zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
  }