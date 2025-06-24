document.getElementById("btn-hitung").onclick=function() {
    let s = Number(document.getElementById("s").value)
    let t = Number(document.getElementById("t").value)
    const phi = 3.14
    
    let luas = 6 * s * t + 3 * (3 ** 0.5) * (s ** 2)
    document.getElementById("luas").textContent = luas
    let v = (3 * (3 ** 0.5) / 2) * (s ** 2) * t
    document.getElementById("v").textContent = v
}
