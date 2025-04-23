document.getElementById("btn-hitung").onclick=function() {
    let harga1 = Number(document.getElementById("harga1").value)
    let harga2 = Number(document.getElementById("harga2").value)
    let harga3 = Number(document.getElementById("harga3").value)
    let harga4 = Number(document.getElementById("harga4").value)
    let harga5 = Number(document.getElementById("harga5").value)

    let diskon1 = 7.5/100

    let total = harga1+harga2+harga3+harga4+harga5
    let diskon2 = total*diskon1
    let diskon3 = total-diskon2
    
    document.getElementById("total").textContent = total

    let diskon = ""
    if (total >= 100000) {
        diskon = diskon2
    }
    else {
        diskon = "0"
    }
    document.getElementById("diskon").textContent = diskon

    let bayar = ""
    if (total >= 100000) {
        bayar = diskon3
    }
    else {
        bayar = total
    }
    document.getElementById("bayar").textContent = bayar

    let keterangan = ""
    if (total >= 100000) {
        keterangan = "ANDA MENDAPATKAN DISKON!"
    }
    else {
        keterangan = "ANDA TIDAK MENDAPATKAN DISKON!"
    }
    document.getElementById("keterangan").textContent = keterangan
}