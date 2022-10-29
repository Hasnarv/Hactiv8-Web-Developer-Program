// fungsi untuk menjumlahkan, mengurangi, membagi, dan mengkali

function calculate(angka1, angka2, cb){
    return cb(angka1,angka2)
}

console.log(calculate(1,3, function(angka1,angka2) {return angka1 + angka2}))
console.log(calculate(1,3, function(angka1,angka2) {return angka1 - angka2}))
console.log(calculate(1,3, function(angka1,angka2) {return angka1 / angka2}))
console.log(calculate(1,3, function(angka1,angka2) {return angka1 * angka2}))