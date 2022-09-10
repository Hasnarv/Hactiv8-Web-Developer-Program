var arr = [0,3,4,2,1]
// menambahkan nilai di belakang
arr.push("lala") //[ 0, 3, 4, 2, 1, 'lala' ]
// menghapus nilai paling belakang
arr.pop() //[ 0, 3, 4, 2, 1, ]
// menambahkan nilai di depan
arr.unshift("halo") //[ 'halo', 0, 3, 4, 2, 1, ]
// menghapus nilai paling depan
arr.shift() //[ 0, 3, 4, 2, 1, ]
// mengurutkan nilai array
arr.sort() //[ 0, 1, 2, 3, 4 ]
// mengambil irisan/porsi dari array
arr.splice(0,2, "lala", "poo") //[ 'lala', 'poo', 2, 3, 4 ]
console.log(arr)
// memecah string menjadi per kata
var kalimat = "aku anak sehat"
var kata = kalimat.split(" ")
console.log(kata)
// mengurutkan angka berdasarkan nilainya
var angka = [1,20,2,15]
angka.sort(function(a,b) {return b-a}) //angka besar ke kecil, [ 20, 15, 2, 1 ]
angka.sort(function(a,b) {return a-b}) //angka kecil ke besar, [ 1, 2, 15, 20 ]
console.log(angka)