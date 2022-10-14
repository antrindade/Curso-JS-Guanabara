function parimp(n) {
    if(n%2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}


document.write(`O resultado de 11 é: ${parimp(11)}`)