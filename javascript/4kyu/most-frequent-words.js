// https://www.codewars.com/kata/51e056fe544cf36c410000fb/javascript

// ---------------my solution---------------
function topThreeWords(text) {
    const count = {};
    const textArray = text.toLowerCase().split(/[ /,!?.-]/)
        .filter(e => e !== '' && e !== "\'");

    textArray.forEach(word => {
        count[word] ? count[word] += 1 : count[word] = 1;
    })

    return Object.entries(count)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(ele => ele[0])
}

// ---------------best practice---------------
let topThreeWords = text => {
    let dict = new Map();
    text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
        let word = match.toLowerCase();
        dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
    });
    dict.delete("'");
    return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
};