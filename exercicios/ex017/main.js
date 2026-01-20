function tabuada(){
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#tab')

    if(num.value.length == 0){
        alert('[ERRO] Numero invalido, vamos fazer uma tabuada com o numero 1 de exemplo!')
    }else{
        let n = Number(num.value)

        tab.innerHTML = ''

        for(let c = 1; c <= 10; c++){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        } 
    }
}

