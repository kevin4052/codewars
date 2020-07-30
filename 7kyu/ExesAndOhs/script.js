//my solution
function XO(str) {
    let count = 0;
    str = str.toUpperCase();
    for (strElement of str){
      if (strElement === "O"){
        count++;
      } else if (strElement === "X"){
        count--;
      }
    }
    return count === 0;
}

//best practice
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}