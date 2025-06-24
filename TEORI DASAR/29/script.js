let kata = "katak"
let kebalik = kata.split('').reverse().join('')

if (kata === kebalik) {
    console.log("Palindrom")
} else {
    console.log("Bukan palindrom")
}