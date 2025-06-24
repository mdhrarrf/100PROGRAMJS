document.getElementById("btn-hitung").onclick=function() {
    let r = Number(document.getElementById("r").value)
    const phi = 3.14
    
    let luas = phi * (r ** 2)
    document.getElementById("luas").textContent = luas
    let k = 2 * phi * r
    document.getElementById("k").textContent = k
}
