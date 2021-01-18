// my solution
function findEvenIndex(arr){
    let result = -1;
    
    for (let i = 0; i < arr.length; i++) {
      let right = arr.slice(0, i).reduce((a, b) => a + b, 0);
      let left = arr.slice(i + 1).reduce((a, b) => a + b, 0);
      if (right === left) result = i;
    }
    
    return result;
}

// best practice
function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}