// my solution
const spinWords = (str) => {  
    return str.split(' ')
      .map(word => (word.length >= 5) ? word.split("").reverse().join("") : word)
      .join(' ');
}

// best solution
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}

// most clever
function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}