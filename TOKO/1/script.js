document.getElementById("btn-hitung").onclick = function() {
    let harga = Number(document.getElementById("harga").value)
    
    let diskon = 12.5/100
    let jumlah = harga*diskon
    let hasil = harga-jumlah
    let keterangan = "SELAMAT ANDA MENDAPATKAN DISKON!"

    document.getElementById("harga-diskon").textContent = hasil
    document.getElementById("keterangan").textContent = keterangan
}