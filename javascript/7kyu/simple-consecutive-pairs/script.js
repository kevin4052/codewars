// my solution
function pairs(ar){
    const array = ar.slice(0, Math.floor(ar.length / 2) * 2);
    let count = 0;
    
    for (let i = 0; i < array.length - 1; i += 2) {
      count += array[i] + 1 === array[i + 1] || array[i] - 1 === array[i + 1] ? 1 : 0;
    }
    
    return count;
  };
  

// best practice
function pairs(array, count = 0) {
    for (let i = 0; i < array.length; i += 2)
      if (Math.abs(array[i] - array[i + 1]) === 1)
        count += 1;
    return count;
}