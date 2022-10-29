function urutHuruf(str) {
    var splitString = str.split("");
    var urutString = splitString.sort();
    var joinArray = urutString.join("");
    return joinArray;
}

console.log(urutHuruf("halo")); //ahlo

console.log(urutHuruf("qwerty")); //eqrtwy

console.log(urutHuruf("qwertyuiopasdfghjklzxcvbnm")); //abcdefghijklmnopqrstuvwxyz