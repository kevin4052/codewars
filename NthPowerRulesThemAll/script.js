function modifiedSum(a, n) {
    return a.reduce((acc, cur) => acc + Math.pow(cur, n) - cur, 0);
}