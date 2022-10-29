function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

// test case
console.log(reverseString("Hello World an Coders")); //sredoC na dlroW olleH

console.log(reverseString("John Doe")); //eoD nhoJ

console.log(reverseString("i am a bookworm")); //mrowkoob a ma i

console.log(reverseString("Coding is my hobby")); //ybboh ym si gnidoC

console.log(reverseString("Super")); //repuS