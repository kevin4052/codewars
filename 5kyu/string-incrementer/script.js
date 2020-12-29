// my solution
const incrementString = (strng) => {
    let result = {
      str: '',
      num: '',
      numLength: 0
    };
    
    for (let i = 0; i < strng.length; i++) {
      strng.charAt(i).match(/[a-z]/i)
      ? result.str += strng.charAt(i)
      : result.num += strng.charAt(i)
    }
    
    result.numLength = result.num.length;
    result.num = String(Number(result.num) + 1);
  
    if (result.numLength - result.num.length > 0)
      result.num = ('0').repeat(result.numLength - result.num.length) + result.num;
  
    return `${result.str}${result.num}`;
}

// best practice
function incrementString(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
}

// most clever
function incrementString(input) {
    return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
        return +d + 1 + ns.replace(/9/g, '0');
      });
}