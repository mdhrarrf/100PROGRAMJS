document.getElementById("btn-hitung").onclick=function() {
    let harga = Number(document.getElementById("harga").value)

    let keterangan = ""
    if (harga >= 100000) {
        keterangan = "ANDA MENDAPATKAN DISKON!"
    }
    else {
        keterangan = "ANDA TIDAK MENDAPATKAN DISKON!"
    }
    document.getElementById("keterangan").textContent = keterangan
}