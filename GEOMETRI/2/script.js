document.getElementById("btn-hitung").onclick=function() {
    let alas = Number(document.getElementById("alas").value)
    let tinggi = Number(document.getElementById("tinggi").value)
    let sisi1 = Number(document.getElementById("sisi1").value)
    let sisi2 = Number(document.getElementById("sisi2").value)
    let sisi3 = Number(document.getElementById("sisi3").value)

    let luas = 0.5 * alas * tinggi
    document.getElementById("luas").textContent = luas
    let keliling = sisi1 + sisi2 + sisi3
    document.getElementById("keliling").textContent = keliling
}  