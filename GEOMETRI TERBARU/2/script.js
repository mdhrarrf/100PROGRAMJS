document.getElementById("btn-hitung").onclick=function() {
    let r = Number(document.getElementById("r").value)
    const phi = 3.14
    
    let luas = 4 * phi * (r ** 2)
    document.getElementById("luas").textContent = luas
    let v = (4/3) * phi * (r ** 3)
    document.getElementById("v").textContent = v
}
