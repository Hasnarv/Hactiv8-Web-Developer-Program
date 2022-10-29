let counter = 0
function recursive(){
    if(counter >= 5){
        return "Finish"
    }
    console.log("Pemanggilan fungsi rekursif ke- ", counter)
    counter++
    return recursive()
}
console.log(recursive())