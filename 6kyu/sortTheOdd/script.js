//my solution
function sortArray(array) {
    let count = 0;
    let newArray = [...array];
    
    const odd = newArray.filter((num, index) => {
      if (num % 2 !== 0){
        newArray[index] = "*";
        return num
      }
    }).sort((a, b) => a - b); 
    
    const sortTheOdd = newArray.map(num => {
    if (num === "*") {
        num = odd[count];
        count++;
    }
    return num;
    });
    
    return sortTheOdd
}

// best practice solution
function sortArray(array) {
        const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
        return array.map((x) => x % 2 ? odd.shift() : x);
    }
