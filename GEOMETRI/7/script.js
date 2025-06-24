document.getElementById("btn-hitung").onclick=function() {
    let r = Number(document.getElementById("r").value)
    let t = Number(document.getElementById("t").value)
    let s = Number(document.getElementById("s").value)
    const phi = 3.14
    
    let l = r + s * phi *  r
    document.getElementById("l").textContent = l
    let v = 0.33333333333 * phi * r * r * t
    document.getElementById("v").textContent = v
}  