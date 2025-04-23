document.getElementById("btn-hitung").onclick=function() {
    let sisi = Number(document.getElementById("sisi").value)
    
    let luas = sisi * sisi
    document.getElementById("luas").textContent = luas
    let keliling = 4 * sisi
    document.getElementById("keliling").textContent = keliling
}  
