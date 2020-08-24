// my solution
function highestRank(arr){
    let rankObj = {};
  
    for (const i in arr) {
      if(arr[i] in rankObj) rankObj[arr[i]] += 1;
      else rankObj[arr[i]] = 1;
    }
    
    return +Object.keys(rankObj).reduce((a, b) => rankObj[a] > rankObj[b] ? a : b);  
  }

// best practice
function highestRank(arr){
    var obj = {};
    arr.forEach(function(elem){
       if(obj[elem] === undefined)
         obj[elem] = 0;
       obj[elem]++;
    });
    var keys = Object.keys(obj), highest = 0, key;
    keys.forEach(function(elem){
       if(obj[elem] >= highest)
       {
          highest = obj[elem];
          key = elem;
       }
    })
    return parseInt(key);
  }