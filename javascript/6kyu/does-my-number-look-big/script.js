// my solution
function narcissistic(value) {
    let result = 0;
    let numStr = value.toString();

    numStr.split('').forEach(num => {
        result += Math.pow(Number(num), numStr.length)
    })

    return result === value;
}

// best practice
function narcissistic(value) {
    return ('' + value).split('').reduce(function (p, c) {
        return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}