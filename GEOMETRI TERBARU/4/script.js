document.getElementById("btn-hitung").onclick=function() {
    let r = Number(document.getElementById("r").value)
    let t = Number(document.getElementById("t").value)
    const phi = 3.14
    
    let luas = phi * r * (r + t)
    document.getElementById("luas").textContent = luas
    let v = (1/3) * phi * (r ** 2) * t
    document.getElementById("v").textContent = v
}
