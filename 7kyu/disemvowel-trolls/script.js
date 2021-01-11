// my solution
function disemvowel(str) {
    let vowels = 'aeiou';
    return Array.from(str).filter(char => !vowels.includes(char.toLowerCase())).join('');
}

// best practice
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}