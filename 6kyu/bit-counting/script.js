// my solution
const countBits = (n) => {
    return Array.from(n.toString(2)).reduce((a, b) => Number(a) + Number(b), 0)
};

// best practice
countBits = n => n.toString(2).split('0').join('').length;