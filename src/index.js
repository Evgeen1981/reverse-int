module.exports = function reverse(n) {
    n = Math.abs(n);
    let a = String(n);

    let arr = [];
    arr = a.split("");
    arr.reverse();
    a = arr.join("");
    a = Number(a);
    return a;
}