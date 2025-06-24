document.getElementById("btn-hitung").onclick=function() {
    let s = Number(document.getElementById("s").value)
    let t = Number(document.getElementById("t").value)
    let l = Number(document.getElementById("l").value)
    let k = Number(document.getElementById("k").value)
    const phi = 3.14
    
    let luas = l + 0.33333333333 * k * s
    document.getElementById("luas").textContent = luas
    let v = 0.33333333333 * l * t
    document.getElementById("v").textContent = v
}
