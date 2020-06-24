//my solution
function encode(string) {
    const cipherKey = {'a':'1', 'e':'2', 'i':'3', 'o':'4', 'u':'5'};
    let newStr = '';
    [...string].forEach(char => char in cipherKey ? newStr += cipherKey[char] : newStr += char);
    return newStr;
  }
  
  function decode(string) {
    const cipherKey = {'1':'a', '2':'e', '3':'i', '4':'o', '5':'u'};
    let newStr = '';
    [...string].forEach(char => char in cipherKey ? newStr += cipherKey[char] : newStr += char);
    return newStr;
  }

  let code = encode('This is an encoding test.');
  console.log(code);
  console.log(decode(code));


  //best practice solution

  // turn vowels into numbers
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}


