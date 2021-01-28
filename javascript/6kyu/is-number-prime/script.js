// my solution
function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    };

    return true;
};

// best practice
function isPrime(num) {
    if (num < 2) return false;
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}