//my solution
function sortArray(array) {
  
  const odd = array.filter(num => num % 2 !== 0).sort((a, b) => a - b); 
  
  const sortTheOdd = array.map(num => num % 2 === 0 ? num : odd.shift());
    
  return sortTheOdd
}
// best practice solution
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}
