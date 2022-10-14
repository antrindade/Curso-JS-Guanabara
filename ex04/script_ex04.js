nome = window.prompt('Qual é seu nome ?')
document.write(`Olá, <strong>${nome}</strong>, Seu nome tem ${nome.length} letras. <br>`)
//Quantidade de letras
//obs: cada vez que apertar espaço, será contado como letra
// Caso você queira colocar negrito, basta você colocar <strong> </strong> onde você deseja.
document.write(`${nome}, Seu nome em maiúsculo é ${nome.toUpperCase()} <br>`)
//Letra maiúscula
document.write(`${nome}, Seu nome em minúsculo é ${nome.toLowerCase()} <br>`)
//Letra minúscula
n = 1545.2000
numBrl = n.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
numUsd = n.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})
numEur = n.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})
document.write(`${numBrl} <br>`)
document.write(`${numUsd} <br>`)
document.write(`${numEur} <br>`)
num = n.toFixed(2)
document.write(`${num} <br>`)
//variável recebe o numero, depois a mesma recebe o numero em formatação para 2 casas decimais.
num = n.toFixed(2).replace('.', ',')
document.write(`${num} <br>`)
//Função para trocar . por ,
