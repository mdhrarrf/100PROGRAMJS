document.getElementById("btn-hitung").onclick=function() {
    let s1 = Number(document.getElementById("s1").value)
    let s2 = Number(document.getElementById("s2").value)
    let t = Number(document.getElementById("t").value)
    const phi = 3.14
    
    let l = s1 * t
    document.getElementById("l").textContent = l
    let k = s1 + s2 * 2
    document.getElementById("k").textContent = k
}  