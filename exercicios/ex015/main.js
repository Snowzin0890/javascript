function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.querySelector('input#ano').value
    let res = document.querySelector('div#res')

    if(nasc.length == 0 || nasc > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        let idade = ano - Number(nasc)
        let genero = ''
        let radio = document.getElementsByName('SX')
        //criando uma tag img
        let img = document.createElement('img')
        //atribuindo um id 'foto' pra tag img
        img.setAttribute('id','foto')

        if(radio[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade <= 10){
                //crianca
                img.setAttribute('src','imagens/BB_M.png')
            }else if(idade <= 21){
                //jovem
                img.setAttribute('src','imagens/Jovem_M.png')
            }else if(idade <= 50){
                //adulto
                img.setAttribute('src','imagens/Adulto_M.png')
            }else{
                //idoso
                img.setAttribute('src','imagens/Idoso_M.png')
            }
        }else if(radio[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade <= 10){
                //crianca
                img.setAttribute('src','imagens/BB_F.png')
            }else if(idade <= 21){
                //jovem
                img.setAttribute('src','imagens/Jovem_F.png')
            }else if(idade <= 50){
                //adulto
                img.setAttribute('src','imagens/Adulto_F.png')
            }else{
                //idoso
                img.setAttribute('src','imagens/Idoso_F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //adiciona um elemento
        res.appendChild(img)
    }
}