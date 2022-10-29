// konsep fungsi, jika sudah di return, code di bawahnya tidak akan dijalankan

function penjumlahan(angka1,angka2, cb){
    cb()
    return angka1+angka2
}
function callBackIntro(){
    console.log("Penjumlahan akan segera dilakukan")
}
console.log(penjumlahan(1,2,callBackIntro))