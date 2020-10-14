// my solution
const remove_parentheses = (s) => {
    let count = 0;
    let newStr = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
        count++;
        } else if (s[i] === ")") {
        count--;
        } else if (count === 0) {
        newStr += s[i];
        }
    }

    return newStr;
}
