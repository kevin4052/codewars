//my solution
function evenChars(string) {
    if (string.length < 2 || string.length > 100) return "invalid string";  
    return string
            .split("")
            .filter((char, index) => (index + 1) % 2 === 0);
  }

//best practice
function evenChars(string) {
    return (string.length < 2 || string.length > 100) ? "invalid string" : 
    [...string].filter((x, i) => i % 2);
  }
