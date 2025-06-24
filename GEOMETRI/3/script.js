document.getElementById("btn-hitung").onclick=function() {
    let r = Number(document.getElementById("r").value)
    
    const phi = 3.14
    
    let l = phi * r * r
    document.getElementById("l").textContent = l
    let k = 2 * phi * r
    document.getElementById("k").textContent = k
}  