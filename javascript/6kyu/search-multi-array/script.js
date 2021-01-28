//my solution
const locate = (array, value) => {
    return flatten(array).includes(value);
  }
  
  const flatten = array => {
    let flatArray = [];
    for (let i in array) {
      if (Array.isArray(array[i])) flatArray = flatArray.concat(flatten(array[i]));
      else flatArray.push(array[i]);
    }
    return flatArray
  }

//best practice
var locate = function(arr, v) {
    return arr.some(function(e) { return Array.isArray(e) ? locate(e, v) : e === v; });
  }