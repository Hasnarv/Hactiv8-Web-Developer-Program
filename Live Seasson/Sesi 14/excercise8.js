function angkaPrima(num) {
    var prima = true;
    for (var i = num - 1; i > 1; i--) {
        if (num % i === 0) {
            prima = false;
        }
    }
    return prima;
}

console.log(angkaPrima(4));
console.log(angkaPrima(7));
console.log(angkaPrima(8));
console.log(angkaPrima(11));