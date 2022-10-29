const ket_parkir = "1 Jam 20 Menit 30 Detik"

const pattern = /\d+/g // mengembalikan digit
console.log(pattern.exec(ket_parkir)[0]) //1
console.log(pattern.exec(ket_parkir)[0]) //20
console.log(pattern.exec(ket_parkir)[0]) //30

const pattern2 = /\D+/g // mengembalikan yg bukan digit
console.log(pattern2.exec(ket_parkir)[0]) //Jam
console.log(pattern2.exec(ket_parkir)[0]) //Menit
console.log(pattern2.exec(ket_parkir)[0]) //Detik

console.log(pattern2.exec(ket_parkir))
console.log(pattern2.exec(ket_parkir))
console.log(pattern2.exec(ket_parkir)) 

// kalo pake tambahan [0], outputnya bukan array