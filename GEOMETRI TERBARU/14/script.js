document.getElementById("btn-hitung").onclick=function() {
    let p = Number(document.getElementById("p").value)
    let l = Number(document.getElementById("l").value)
    const phi = 3.14
    
    let luas = p * l
    document.getElementById("luas").textContent = luas
    let k = 2 * (p + l)
    document.getElementById("k").textContent = k
}
