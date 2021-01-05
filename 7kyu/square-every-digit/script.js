// my solution
const squareDigits = num => +Array.from(String(num)).map(ele => Number(ele) ** 2).join('');

// best practice
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));   
}