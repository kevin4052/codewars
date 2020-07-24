//my solution
function list(names) {
    let str = "";
    for(let i = names.length - 1; i >= 0; i--){
      if(i === names.length - 1) str = names[i].name;
      else if (i === names.length - 2) str = names[i].name.concat(" & ", str);
      else str = names[i].name.concat(", ", str);
    }
    return str;
  }


  //best practice solution
  function list(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }

  //clever solution
  function list(names) {
    var xs = names.map(p => p.name)
    var x = xs.pop()
    return xs.length ? xs.join(", ") + " & " + x : x || ""
  }