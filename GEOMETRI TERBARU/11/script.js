document.getElementById("btn-hitung").onclick=function() {
    let a = Number(document.getElementById("a").value)
    let t1 = Number(document.getElementById("t1").value)
    let t2 = Number(document.getElementById("t2").value)
    const phi = 3.14
    
    let luas = (1/2) * a * t1 + 3 * (1/2) * a * t1
    document.getElementById("luas").textContent = luas
    let v = (1/3) * (1/2) * a * t1 * t2
    document.getElementById("v").textContent = v
}
