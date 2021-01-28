// my solution
function cleanString(s) {
    const newStr = [];
    
    s.split('').forEach(char => {
      (char !== '#') 
      ? newStr.push(char)
      : newStr.pop();
    });
    
    return newStr.join('');
};

// best practice
function clean_string(s) {
    const result = []
    for (const c of s) {
      if (c === "#") {
        result.pop()
      } else {
        result.push(c)
      }
    }
    return result.join("")
}