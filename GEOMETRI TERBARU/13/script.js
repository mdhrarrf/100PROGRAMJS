document.getElementById("btn-hitung").onclick=function() {
    let s = Number(document.getElementById("s").value)
    const phi = 3.14
    
    let luas = s ** 2
    document.getElementById("luas").textContent = luas
    let k = 4 * s
    document.getElementById("k").textContent = k
}
