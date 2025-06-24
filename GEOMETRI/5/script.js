document.getElementById("btn-hitung").onclick=function() {
    let s1 = Number(document.getElementById("s1").value)
    let s2 = Number(document.getElementById("s2").value)
    let s3 = Number(document.getElementById("s3").value)
    let s4 = Number(document.getElementById("s4").value)
    let t = Number(document.getElementById("t").value)
    const phi = 3.14
    
    let l = s1 + s2 * 0.5 * t
    document.getElementById("l").textContent = l
    let k = s1 + s2 + s3 + s4
    document.getElementById("k").textContent = k
}  