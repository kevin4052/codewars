// my solution
function sumEvenNumbers(input) {
    return input.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0);
  }

// best practice
sumEvenNumbers = input => input.filter(x => x % 2 == 0).reduce((x, y) => x + y, 0)

// most clever
const sumEvenNumbers = a => a.reduce((r, e) => r + (e % 2 ? 0 : e), 0);