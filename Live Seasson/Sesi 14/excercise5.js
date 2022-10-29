// const kalimat = "Nama Saya Adalah Draco Malfoy"
// const regex_literal = /Nama/
// console.log(regex_literal.test(kalimat)) //true
// console.log(regex_literal.exec)

// const email = "joko@gmail.com"
// const pattern_gmail_valid = /@gmail.com/
// console.log(pattern_gmail_valid.test(email))

function threeStepsAB(text){
    const kalimat = text
    const pattern = /[a__b]/
    return pattern.test(kalimat)
}
console.log(threeStepsAB("lane borrowed"))
console.log(threeStepsAB("i am sick"))
console.log(threeStepsAB("you are boring"))
console.log(threeStepsAB("barbarian"))
console.log(threeStepsAB("bacon and meat"))