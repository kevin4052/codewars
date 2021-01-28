// my solution
function multiplicationTable(row,col){
    let result = [];
    for (let i = 1; i <= row; i++){
      let current = [];
      for (let j = 1; j <= col; j++){
        current.push(i * j);
      }
      result.push(current);
    };
    return result;
  }

  // best practice solution
  function multiplicationTable(row,col){
    out = []
    for (var i = 1; i <= row; i++)
    {
      temp = []
      // console.log(temp)
      for (var j = 1; j <= col; j++)
      {
        temp.push(i*j)
      }
      out.push(temp)
    }
    return out
  }

  //most clever solution
  const multiplicationTable = (row, col) => Array(...Array(row))
    .map((_, i) => Array(...Array(col))
    .map((_, j) => (i + 1) * (j + 1)));