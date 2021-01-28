// my solution
function isIsogram(str){
    let result = Array.from(str.toLowerCase()).filter((char, i, arry) => arry.indexOf(char) === arry.lastIndexOf(char));
  
    return str.length === result.length
}

// best practice
function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
}