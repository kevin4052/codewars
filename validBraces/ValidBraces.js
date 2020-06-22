//my solution
function validBraces(braces){
    let holdingStr = '';
    
    for(let i = 0; i < braces.length; i++){
      holdingStr += braces[i];
  
      if(holdingStr.slice(-2) === '()' || holdingStr.slice(-2) === '{}' || holdingStr.slice(-2) === '[]'){
        holdingStr = holdingStr.slice(0, -2);
      }
      console.log(`result: ${holdingStr}`);
    }
    return holdingStr === '';
  }

//best practice solution
function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

//clever solution
function validBraces(braces){
  while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
  return !braces.length;
 }