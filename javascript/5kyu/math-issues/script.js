// my solution
Math.round = function(number) {
    return (number % 1) < 0.5 
      ? number - (number % 1) 
      : number + (1 - (number % 1));
};
  
  Math.ceil = function(number) {
    return (number % 1) === 0 
      ? number 
      : number + (1 - (number % 1));
};
  
  Math.floor = function(number) {
    return number - (number % 1);
};

// best practice
Math.round = function(number) {
    return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
    return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
    return parseInt(number);
};