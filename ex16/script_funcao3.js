let v = function(x) {
    return x*2
}

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

function fatori(n){
    if(n == 1){
        return 1
    }else{
        return n * fatori(n-1)
    }
}

document.write(`${fatori(5)}`)