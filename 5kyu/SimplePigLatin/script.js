//my solution
function pigIt(str){
    let check = ",.?!;:";
    let newStr = str.split(" ").map(word => {
      if (!check.includes(word)){
        word = word.slice(1) + word[0];
        word += 'ay';
      }    
      return word;
    })
    return newStr.join(" ");
  }

//best practice
function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }