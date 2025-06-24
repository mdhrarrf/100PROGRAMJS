document.getElementById("btn-hitung").onclick=function() {
    let r = Number(document.getElementById("r").value)
    const phi = 3.14
    
    let l = 4 * phi * r * r
    document.getElementById("l").textContent = l
    let v = phi * r * r * r * 1.33333333333
    document.getElementById("v").textContent = v
}  