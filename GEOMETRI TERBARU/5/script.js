document.getElementById("btn-hitung").onclick=function() {
    let s = Number(document.getElementById("s").value)
    const phi = 3.14
    
    let luas = 6 * (s ** 2)
    document.getElementById("luas").textContent = luas
    let v = s ** 3
    document.getElementById("v").textContent = v
}
