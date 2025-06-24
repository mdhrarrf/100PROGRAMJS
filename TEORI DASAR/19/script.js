let tahun = 2024
if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
    console.log("Tahun kabisat")
} else {
    console.log("Bukan tahun kabisat")
}
