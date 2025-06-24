document.getElementById("btn-hitung").onclick=function() {
    let p = Number(document.getElementById("p").value)
    let l = Number(document.getElementById("l").value)
    let t = Number(document.getElementById("t").value)
    const phi = 3.14
    
    let luas = p * l + 2  * (p * t + l * t)
    document.getElementById("luas").textContent = luas
    let v = (1/3) * p * l * t
    document.getElementById("v").textContent = v
}
