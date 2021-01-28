// my solution
const sum = (numbers) => numbers.reduce((a, b) => a + b, 0);

//best practice
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}