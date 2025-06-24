let user = {
    nama: "Rudi",
    umur: 22,
    hobi: "membaca"
}

for (let key in user) {
    console.log(key + ":", user[key])
}