var agora = new Date()
var horario = agora.getHours()

document.write(`Agora são exatamente ${horario} horas. <br>`)
if(horario >=5 && horario <= 12){
    document.write("Bom dia")
}else if(horario >12 && horario <=18 ){
    document.write("Boa tarde")
}else if(horario >18 && horario <=23){
    document.write("Boa noite")
} else {
    document.write("Boa madrugada")
}