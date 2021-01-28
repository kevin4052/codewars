//my solution
function iqTest(numbers){
    let count = {'odd': 0, 'even': 0};  
    let numArray = numbers.split(' ').map(elem => {
      if (elem % 2 !== 0) {
        count.odd += 1;
        return "odd";
        }
      else {
        count.even += 1;
        return "even";
        }
    });
    return count.odd === 1 ? numArray.indexOf("odd") + 1 : numArray.indexOf("even") + 1;
  }

//best practice
function iqTest(numbers){
    numbers = numbers.split(" ").map(function(el){return parseInt(el)});
    
    var odd = numbers.filter(function(el){ return el % 2 === 1});
    var even = numbers.filter(function(el){ return el % 2 === 0});
    
    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
  }

//most clever
function iqTest(numbers){
    var nums = numbers.split(" ").map(x => x % 2);  
    var sum = nums.reduce((a,b) => a + b);  
    var target = sum > 1 ? 0 : 1;
    
    return nums.indexOf(target) + 1;
  }