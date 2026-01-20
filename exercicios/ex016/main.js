function contar(){
    let numI = document.querySelector('input#numI')
    let numF = document.querySelector('input#numF')
    let numP = document.querySelector('input#numP')
    let res = document.querySelector('div#res')

    if(numI.value.length == 0 || numF.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        let nI = Number(numI.value)
        let nF = Number(numF.value)
        let nP = Number(numP.value)


        if(nP == 0){
            alert('Passo invalido! Considerando PASSO 1')
            nP = 1
        }
        //progressivo
        for(let c = nI; c <= nF ; c += nP){
            res.innerHTML += `${c} \u{1F449}`
        }
        //regressivo
        for(let c = nI; c >= nF; c -= nP){
            res.innerHTML += `${c} \u{1F449}`
        }

        res.innerHTML += ' \u{1F1E7}\u{1F1F7}'
    }
}