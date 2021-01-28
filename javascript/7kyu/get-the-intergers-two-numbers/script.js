// my solution
const range = (startNum, endNum) => {
    return Array.from(Array(endNum - startNum - 1), (_, x) => x + startNum + 1)
}; 

// best practice 
function range(startNum, endNum)   
{  
  let numIntegers=[];  
  for (let i = startNum+1; i<endNum; i++){
    numIntegers.push(i);
  }
  return numIntegers;
}; 

// most clever
range = (a, b) => [...Array(b).keys()].slice(a + 1);