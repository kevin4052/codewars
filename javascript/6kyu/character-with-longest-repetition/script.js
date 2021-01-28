// my solution
const longestRepetition = s => {
    let repeats = [];
    let repeat = [];
    
    s.split('').forEach((char, index) => {
      if (repeat.includes(char) || index === 0) {
        repeat.push(char);
      } else if (!repeat.includes(char)) {
        repeats.push(repeat);
        repeat = [char];
      }
    });
  
    repeats.push(repeat);  
    repeats = repeats.reduce((a, b) => a.length >= b.length ? a : b, []);
  
    return [repeats[0] ? repeats[0] : '', repeats.length];
}

// best practice
function longestRepetition(s) {
    let count = 0;
    let prevLetter = '';
    
    return s.toLowerCase().split('').reduce((acc, curr) => {
      if(curr === prevLetter){
        count++;
      }
      else{
        count = 1;
      }
  
      if(count > acc[1]){
        acc[1] = count;
        acc[0] = curr;
      }
  
      prevLetter = curr;
      return acc;
    }, ['', 0]);
}

// most clever
const longestRepetition = s => s ?
  s.match(/(.)\1*/g)
    .map((s, i) => [s[0], s.length, i])
    .sort((a, b) => (b[1] - a[1]) || (a[2] - b[2]))[0]
    .splice(0, 2) :
  ['', 0];