// forEach = untuk data banyak, kalo datanya nambah bakal tetep jalan karna mengikuti jumlah datanya. dalemnya harus function
/*
<variable-array>.forEach(variable_each_data) => () => {
    ..do something
}
*/
const students = ["hasna", "rizki", "violina"]
/*
cara 1 = arrow function
students.forEach((murid) => console.log(murid))
 */
// cara 2 = normal function
students.forEach(function(murid){
    console.log(murid)
})
