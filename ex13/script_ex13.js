var agora = new Date()
var diaSem = agora.getDay()

document.write(`${diaSem} <br>`)

switch(diaSem){
    case 0:
        document.write("Domingo")
        break
    case 1:
        document.write("Segunda-feira")
        break
    case 2:
        document.write("Terça-feira")
        break
    case 3:
        document.write("Quarta-feira")
        break
    case 4:
        document.write("Quinta-feira")
        break
    case 5:
        document.write("Sexta-feira")
        break
    case 6:
        document.write("Sabado")
        break
    default:
        document.write('[Erro] Dia invalido')
        break
    }