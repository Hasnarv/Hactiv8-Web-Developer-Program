// A. Buatlah sebuah objek yang mendeskripsikan diri kalian masing-masing.
// B. Object tersebut harus memiliki property nama_depan(string), nama_belakang(string), hobi(array ofstrings), angka_favorit(number), memakai_kacamata(boolean), dan boleh memanambahkan propertylainnya.
// C. Tampilkan setiap propertynya menggunakan console.log setelah setiap perubahan.
// D. Cetak nama_lengkap dengan console.log.
// E. Ubah angka_favorit jadi 8.
// F. Tambahkan satu hobi "coding".
// G. Tambahkan satu property "lulusan" dengan value "Hacktiv8".
// H. Cetak semua hobi satu per satu menggunakan loop.
// I. Cetak semua key milik objek, dan cetak semua values milik objek.
// J. Gunakan loop untuk cetak semua property milik objek dengan format key : values.

var siswa = {
    nama_depan: "Hasna",
    nama_belakang: "Rizki",
    hobi: ["menulis", "membaca", "berenang"],
    number: 1,
    memakai_kacamata: false,
}
console.log(siswa)

// mencetak nama lengkap
const full_name = siswa.nama_depan + " " + siswa.nama_belakang
console.log(full_name)
// mengubah angka
siswa.number=8
console.log("angka favorit: "+siswa.number)
// Tambahkan satu hobi "coding"
siswa.hobi.push("coding")
// manambah properti
siswa['lulusan'] = "Hactiv8"
console.log(siswa)
// cetak hobi menggunakan loop
console.log("===> HOBINYA:")
siswa.hobi.forEach(function(murid){
    console.log(murid)
})
// cetak semua key dan value milik objek
for(let key in siswa){
    if (siswa.hasOwnProperty(key)){
        console.log(key + " --> " + siswa[key])
    }
}