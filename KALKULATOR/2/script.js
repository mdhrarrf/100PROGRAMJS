document.getElementById("btn-hitung").onclick=function() {
    let angka1 = Number(document.getElementById("angka1").value)
    let angka2 = Number(document.getElementById("angka2").value)
    
    let hasil = angka1 / angka2
    document.getElementById("hasil").textContent = hasil
}