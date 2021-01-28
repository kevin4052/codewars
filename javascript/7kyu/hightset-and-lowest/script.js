// my solution
function highAndLow(numbers){
    const numArray = numbers.split(" ");
    const max = Math.max(...numArray);
    const min = Math.min(...numArray);
    
    return `${max} ${min}`
  }

// best practice
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

// most clever
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }