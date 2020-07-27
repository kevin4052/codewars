//my solution
function rgb(r, g, b){
    function componentToHex(c) {
      if (c > 255) c = 255;
      let hex = c.toString(16);
      if (hex < 0){
        return "00";
      } else {
        return hex.length == 1 ? "0" + hex.toUpperCase() : hex.toUpperCase();
      }
    }
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  //best practice
  function rgb(r, g, b){
    return toHex(r)+toHex(g)+toHex(b);
  }
  
  function toHex(d) {
      if(d < 0 ) {return "00";}
      if(d > 255 ) {return "FF";}
      return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
  }

  //most clever
  function rgb(r, g, b){
    return [r,g,b].map(function(x) {
      return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join('').toUpperCase();
  }