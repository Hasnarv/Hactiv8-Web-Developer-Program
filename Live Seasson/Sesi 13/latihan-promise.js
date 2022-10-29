/*
1. deklarasikan sebuah promise (nama bebas)

2. Resolve promise tersebut

3. Reject promise tersebut */

const hitung = new Promise((resolve,reject) => {
    hasil = 1+1
    resolve(hasil)
})

const hitung2 = new Promise((resolve,reject) => {
    hasil = 1+1
    reject("lupa caranya")
})

// memanggil fungsi yg me-resolve
console.log(hitung)
// // memanggil fungsi yg me-resolve tapi dengan handle error
hitung
    .then(data => console.log(data))
    .catch(err => console.log(err))
// memanggil fungsi yg me-reject tapi dengan handle error
hitung2
    .then(data => console.log(data))
    .catch(err => console.log(err))