//my solution
function century(year) {
    // Finish this :)
    return Math.floor((year % 100 === 0) ? year / 100 : year / 100 + 1);
  }

  //best practices
  function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }