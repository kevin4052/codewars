// my solution
function createPhoneNumber(numbers){
    let phoneNumber = [
      numbers.slice(0, 3).join(''),
      numbers.slice(3, 6).join(''),
      numbers.slice(6, 10).join('')    
    ];
    
    return `(${phoneNumber[0]}) ${phoneNumber[1]}-${phoneNumber[2]}`
}

// best practice
function createPhoneNumber(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
}