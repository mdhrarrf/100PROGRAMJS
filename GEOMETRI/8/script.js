document.getElementById("btn-hitung").onclick=function() {
    let r = Number(document.getElementById("r").value)
    let t = Number(document.getElementById("t").value)
    const phi = 3.14
    
    let l = r + t * 2 * phi * r
    document.getElementById("l").textContent = l
    let v = phi * r * r * t
    document.getElementById("v").textContent = v
}
