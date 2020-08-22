// my solution
function persistence(num) {
    let count = 0;
    
    while (num.toString().length > 1) {
      let tempNum = 1;
      let str = num.toString();   
      
      for (let i = 0; i < str.length; i++){
        tempNum *= str[i];
      }
      
      count++;
      num = tempNum;    
    };
    
    return count;
  }
  
//best practice
function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }

 //most clever
 const persistence = num => {
    return `${num}`.length > 1 
      ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
      : 0;
  }
