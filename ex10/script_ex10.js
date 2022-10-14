function calcular() {
    var txt = window.document.querySelector('input#txtvel')
    var vel = Number(txt.value)
    var res = window.document.querySelector('div#res')
    res.innerText = (`A sua velocidade é de ${vel},`)
    if(vel > 60) {
    res.innerText += (` e você será multado por ecesso de velocidade,`)
}
    res.innerText += (` pode seguir em frente, um bom dia!`)
}