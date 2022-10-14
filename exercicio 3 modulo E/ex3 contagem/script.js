function contar() {
    let inicio = document.getElementById('in')
    let final = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar'
        window.alert("[ERRO] Coloque um numero em todos os campos, e tente novamente! ")
    } else {
        res.innerHTML = `Conatndo: <br>`
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido, considerando o passo 1')
            p = 1
        }
        
        if(i < f) {
            //contagem crescente
            for(let c = i; c <= f; c+= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c-= p)
                res.innerHTML += ` ${c} \u{1f449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
