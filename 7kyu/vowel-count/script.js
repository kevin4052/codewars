// my solution
const getCount = (str) => Array.from(str).filter(char => ('aeiou').includes(char.toLowerCase())).length;

// best practice
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}