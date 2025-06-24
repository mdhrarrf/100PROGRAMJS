document.getElementById("btn-hitung").onclick=function() {
    let s = Number(document.getElementById("s").value)
    let t = Number(document.getElementById("t").value)
    const phi = 3.14
    
    let luas = (5 * s * t + (5/2) * (s ** 2) * (5 ** 0.5))
    document.getElementById("luas").textContent = luas
    let v = (5/2) * (s ** 2) * (5 ** 0.5) * t
    document.getElementById("v").textContent = v
}
