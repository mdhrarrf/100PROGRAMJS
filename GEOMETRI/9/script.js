document.getElementById("btn-hitung").onclick=function() {
    let p = Number(document.getElementById("p").value)
    let t = Number(document.getElementById("t").value)
    let l = Number(document.getElementById("l").value)
    const phi = 3.14
    
    let luas = p * l + p * t + l * t * 2
    document.getElementById("l").textContent = l
    let v = p * l * t
    document.getElementById("v").textContent = v
}
