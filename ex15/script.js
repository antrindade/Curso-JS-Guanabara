let num = [5, 8, 2, 9, 3]
num[5] = 6
num.push(7)
num.sort()

document.write(`Nosso vetor tem ${num.length} conteúdos <br>`)

for(let pos=0; pos<num.length; pos++){
    document.write(`A posição ${pos} tem o valor ${num[pos]} <br>`)
}

for(let pos in num){

    document.write(`A posição ${pos} tem o valor ${num[pos]} <br>`)
    
    }

    let pos = num.indexOf(4)
    document.write(`Ela está na posição ${pos} <br>`)

    if(pos == -1) {
        document.write('O valor não foi encontrado')
    }else {
        document.write(`O valor está na posição ${pos}`)
    }