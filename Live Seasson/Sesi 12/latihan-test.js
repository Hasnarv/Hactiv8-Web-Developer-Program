const kalimat = "Nama Saya Adalah Draco Malfoy"
const regex_literal = /Nama/
console.log(regex_literal.test(kalimat)) //true
console.log(regex_literal.exec)

const email = "joko@gmail.com"
const pattern_gmail_valid = /@gmail.com/
console.log(pattern_gmail_valid.test(email))

// contoh validasi nama harus tidak ada angka menggunakan regex
const name = "1 Hasna Rizki"
const pattern_character_only = /\d+/
const is_name_invalid = pattern_character_only.test(name)
if(is_name_invalid) {
    console.log("Nama tidak valid")
} else {
    console.log("Nama Valid")
}