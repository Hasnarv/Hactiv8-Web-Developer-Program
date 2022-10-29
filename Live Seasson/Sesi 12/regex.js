var foo = "Belajar JavaScript"
var pola = /JavaScript/

// menggunakan method test(), balikan boolean
// apakah nilai di pola ada pada variabel foo?
console.log(pola.test(foo)) //true
// apakah kata Belajar ada pada variabel foo?
console.log(/Belajar/.test(foo)) //true
// apakah kata belajar ada pada variabel foo?
console.log(/belajar/.test(foo)) //false

// menggunakan method exec(), balikan array
var fuu = "1 jam sama dengan 60 menit, juga sama dengan 3600 detik"
// cari karakter angka dengan digit 1 atau lebih
var pola2 = /\d+/

console.log(pola2.exec(foo)) // Array ["1"]
console.log(pola2.exec(foo)) // Array ["60"]
console.log(pola2.exec(foo)) // Array ["3600"]
console.log(pola2.exec(foo)) // Array ["null"]