document.getElementById("btn-hitung").onclick=function() {
    let s = Number(document.getElementById("s").value)
    let t = Number(document.getElementById("t").value)
    const phi = 3.14
    
    let luas = 5 * s * (t ** 2) ** 0.5 + (5/2) * (s ** 2) * (5 ** 0.5)
    document.getElementById("luas").textContent = luas
    let v = (1/3) * (5 * (5 + 2 * (5 ** 0.5 )) * (s ** 2) * t) / 2
    document.getElementById("v").textContent = v
}
