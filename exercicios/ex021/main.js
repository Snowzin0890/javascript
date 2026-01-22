let produtos = []
let quantidade = []
let preco = [calc()]

function add(){
    let prod = document.querySelector('input#prod')
    let quant = document.querySelector('input#quant')
    let res = document.querySelector('div#res')
    let n = Number(quant.value)
    let p = prod.value

    res.innerHTML = ''

    if(prod.value.length == 0 || quant.value.length == 0 || produtos.indexOf(`${prod}`) != -1){
        alert('Insira produto e quantidade para adicionar! E nao repita um produto ja adicionado')
    }else{
        produtos.push(`${p}`)
        quantidade.push(n)
        res.innerHTML += 'Itens adicionados a lista!'
        console.log(produtos)
        console.log(quantidade)
    }
}

function calc(){
    
}