var a = window.document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerText = "clicou!"
    a.style.background = "black"
}

function entrar() {
    a.innerText = "Entrou!"
}

function sair() {
    a.innerText = "Saiu!"
}