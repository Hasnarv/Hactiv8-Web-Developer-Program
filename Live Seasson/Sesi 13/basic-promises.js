const pending = new Promise((resolve,reject) => {
    // resolve = fullfilled, janji dipenuhi
    // resolve("Udah sampe di tempat")
    // reject = janji yg dibuat dibatalkan
    // reject("Gajadi dateng")
})

const ditepati = new Promise((resolve,reject) => {
    // resolve = fullfilled, janji dipenuhi
    resolve("Udah sampe di tempat")
    // reject = janji yg dibuat dibatalkan
    // reject("Gajadi dateng")
})

const tdkDitepati = new Promise((resolve,reject) => {
    // resolve = fullfilled, janji dipenuhi
    // resolve("Udah sampe di tempat")
    // reject = janji yg dibuat dibatalkan
    reject("Gajadi dateng")
})

console.log(pending)
console.log(ditepati)
console.log(tdkDitepati) //Error, Kita perlu handle error ini
/* Cara Handle Error */
tdkDitepati
    .then(data => console.log(data))
    .catch(err => console.log(err))