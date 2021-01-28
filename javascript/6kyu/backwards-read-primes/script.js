// my solution
const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const isReversePrime = num => {
    let reverseNum = +num.toString().split('').reverse().join('');
    if (num !== reverseNum) return isPrime(reverseNum);
    else return false;
}

const backwardsPrime = (start, stop) => {
    let result = [];
    for (let num = start; num <= stop; num++) {
        if (num % 2 !== 0) {
            if (isPrime(num) && isReversePrime(num)) result.push(num);
        }
    }
    return result;
}

// best practice
function backwardsPrime(start, stop) {
    var range = [];
    for (var i = start % 2 == 0 ? start + 1 : start; i <= stop; i += 2) range.push(i);
    return range.filter(function (v) {
        return isPrime(v);
    }).filter(function (v) {
        var rev = parseInt(v.toString().split('').reverse().join(''));
        return rev != v && validPrimeCheck(rev);
    });
}

//Uses an ever-expanding Sieve of Eratosthenes to test for primes
var sieve = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

function validPrimeCheck(num) {
    generateSieve(Math.ceil(Math.sqrt(num)));
    return isPrimeFromSieve(num);
}

function generateSieve(max) {
    var current = sieve[sieve.length - 1] + 2;
    while (current <= max) {
        if (isPrimeFromSieve(current)) sieve.push(current);
        current += 2;
    }
}

function isPrimeFromSieve(num) {
    var max = Math.ceil(Math.sqrt(num));
    for (var i = 0; i < sieve.length; i++) {
        if (num % sieve[i] === 0) return false;
        else if (max < sieve[i]) return true;
    }
    return true;
}

function isPrime(num) {
    if (num < 2 || (num % 2 == 0 && num !== 2)) return false;
    else {
        if (sieve.indexOf(num) !== -1) return true;
        else return validPrimeCheck(num);
    }
}