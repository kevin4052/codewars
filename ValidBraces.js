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