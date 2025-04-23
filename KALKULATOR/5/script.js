document.getElementById("btn-hitung").onclick=function() { 
    let angka1 = Number(document.getElementById("angka1").value)
    let pilih = document.getElementById("pilih").value
    let angka2 = Number(document.getElementById("angka2").value)
    
    let hasil = ""
    if (pilih = "*") {
        hasil = angka1 * angka2
    }
    else if (pilih = "/") {
        hasil = angka1 / angka2
    }
    else if (pilih = "+") {
        hasil = angka1 + angka2
    }
    else {
        hasil = angka1 - angka2
    }
    document.getElementById("hasil").textContent = hasil
}