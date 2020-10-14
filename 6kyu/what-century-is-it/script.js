// my solution
const whatCentury = (year) => {
    const century = Math.ceil(year/100);
    
    if (century > 10 && century < 14) {
      return century + "th";
    } else if (century.toString().slice(-1) === "1") {
      return century + "st";
    } else if (century.toString().slice(-1) === "2") {
      return century + "nd";
    } else if (century.toString().slice(-1) === "3") {
      return century + "rd";
    } else {
      return century + "th";
    }
  }

// best practice
function whatCentury(year)
{
  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}