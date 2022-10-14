function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = window.document.getElementById('imagem')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.src = 'bebeMenino.jpg'
            } else if (idade >= 10 && idade < 21) {
                img.src = 'jovemMenino.jpg'
            } else if (idade < 50) {
                img.src = 'adulto.jpg'
            } else {
                img.src = 'idoso.jpg'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.src = 'bebeMenina.jpg'
            } else if (idade >= 10 && idade < 21) {
                img.src = 'jovemMenina.jpg'
            } else if (idade < 50) {
                img.src = 'adulta.jpg'
            } else { 
                img.src = 'idosa.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}