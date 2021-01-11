// my solution
const descendingOrder = (n) => +Array.from(String(n)).sort((a, b) => b - a).join('');

// best practice
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}