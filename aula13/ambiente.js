let pizza = 20

function comerPizza(){

    function comerFatia(){
        if(pizza > 0){
            pizza--
        }
    }

    while(pizza > 0){
        console.log(`Pedacos restantes: ${pizza}`)
        comerFatia()
    }

    console.log('A pizza acabou!!!')
}

console.log(comerPizza())

/*
var c = 1
do{
    console.log(`Passo ${c}`)
    c++
}while(c <= 20)
*/