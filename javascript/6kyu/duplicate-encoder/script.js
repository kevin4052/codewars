// my solution
const duplicateEncode = (word) => {
    let count = {};
    
    Array
      .from(word.toLowerCase())
      .forEach(char => {
        count[char] === undefined
        ? count[char] = 1
        : count[char] += 1
    });
    
    return Array
      .from(word.toLowerCase())
      .map(char => count[char] === 1 ? '(' : ')')
      .join('');
}

// best practice
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
}