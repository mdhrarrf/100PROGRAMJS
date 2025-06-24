let kalimat = "saya belajar coding"
let kata = kalimat.split(" ")

kata.forEach(function(k) {
    console.log(k + " (" + k.length + " huruf)")
})