// my solution
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const alphabetPosition = (text) => {
  return Array
    .from(text.toLowerCase(), char => alphabet.indexOf(char) + 1)
    .filter(ele => ele)
    .join(' ')
}

// best practice
function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
}