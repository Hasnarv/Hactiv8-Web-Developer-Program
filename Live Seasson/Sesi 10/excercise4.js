function angka(angka){
    if (angka%2 == 0) {
        return "Bilangan Genap"
    } else if (angka%2 == 1) {
        return "Bilangan Ganjil"
    } else{
        return "Invalid Data"
    }
}
console.log(angka(2))
console.log(angka(3))
console.log(angka(20))
console.log(angka(21))
console.log(angka("kska"))
