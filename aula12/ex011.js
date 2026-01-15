let idade = 200
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log('Não vota.')
}else if(idade < 18 || idade >= 66 && idade <= 120){
    console.log('Voto opcional.')
}else if(idade > 120){
    console.log('Idade Inválida.')
}else{
    console.log('Voto obrigatório.')
}