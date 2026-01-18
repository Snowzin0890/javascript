function horaDoDia(){
    let msg = document.querySelector('div#mensagem')
    let img = document.querySelector('img#imagem')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()

    msg.innerHTML = `Agora sao ${hora} horas e ${min} minutos.`

    if(hora >= 6 && hora < 12){
        //Bom dia!!
        document.body.style.backgroundColor = 'yellow'
        img.src = 'imagens/Manha.png'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde!!
        document.body.style.backgroundColor = 'orange'
        img.src = 'imagens/Tarde.png'
    }else{
        //Boa noite!!
        document.body.style.backgroundColor = 'grey'
        img.src = 'imagens/Noite.png'
    }
}