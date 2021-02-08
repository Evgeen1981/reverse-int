module.exports = function reverse(n) {
    let numN = 0;
    for (; n; n = Math.floor(n / 10)) {
        numN *= 10;
        numN += n % 10;
    }
    n = numN;
    return n;
};
