function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora <= 12) {
        img.src = 'dia.PNG'
        document.body.style.background = '#92a000'
    } else if (hora > 12 && hora <= 18) {
        img.src = 'tarde.PNG'
        document.body.style.background = '#c96030'
    } else {
        (hora > 18 && hora <= 23)
        img.src = 'noite.PNG'
        document.body.style.background = '#6600ff'
    }
}