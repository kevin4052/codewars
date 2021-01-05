// my solution
const accum = (s) => Array.from(s.toLowerCase())
  .map((char, i) => char.toUpperCase() + char.repeat(i))
  .join('-');

// best practice
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}