let angka = 7
let prima = true

if (angka <= 1) {
    prima = false
} else {
    for (let i = 2; i < angka; i++) {
        if (angka % i === 0) {
            prima = false
            break
        }
    }
}

console.log(prima ? "Bilangan prima" : "Bukan bilangan prima")
