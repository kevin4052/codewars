// my solution
const findOutlier = (integers) => {
  let nums = {
    even: [],
    odd: []
  };
  
  integers.forEach(num => {
    num % 2 === 0 
    ? nums.even.push(num) 
    : nums.odd.push(num);
  })
  
  return nums.even.length === 1 ? nums.even[0] : nums.odd[0];
}

// best practice
function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
}