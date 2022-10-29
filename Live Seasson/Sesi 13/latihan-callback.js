// fungsi menerima 3 parameter (jml, uang, konversi)
// Buatlah sebuah fungsi yang menerima 3 parameter, parameter pertama dan kedua adalah jumlah uang, parameter ketiga adalah currency ("Rp", "$", "SGD")

// butalah fungsi yang dapat menghitung (+, -, *, /) kedua angka tersebut dan mengembalikan dalam format

// "{Mata Uang} {hasil operasi}"

function hitung (uang1, uang2, konversi, cb){
    return cb(uang1,uang2,konversi)
}
function tambah(uang1,uang2, konversi){
    return `${konversi} ${uang1 + uang2}`
}
function kurang(uang1,uang2, konversi){
    jml = uang1-uang2
    return konversi + jml
}
function bagi(uang1,uang2, konversi){
    jml = uang1/uang2
    return konversi + jml
}
function kali(uang1,uang2, konversi){
    jml = uang1*uang2
    return konversi + jml
}
console.log(hitung(1,3, "Rp ", tambah))
console.log(hitung(1,3, "$ ", kurang))
console.log(hitung(1,3, "Rp ", bagi))
console.log(hitung(1,3, "SGD ", kali))