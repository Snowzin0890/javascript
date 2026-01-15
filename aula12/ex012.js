let agora = new Date()
let horario = agora.getHours()
let min = agora.getMinutes()
let nome = 'Tommaso'
console.log(`Olá ${nome}.`)
if(horario >= 6 && horario < 12){
    console.log(`São ${horario}:${min} horas da manhã.`)
    console.log('Bom dia!!!')
}else if(horario >= 12 && horario < 18){
    console.log(`São ${horario}:${min} horas da tarde.`)
    console.log('Boa tarde!!!')
}else if(horario >= 18){
    console.log(`São ${horario}:${min} horas da noite.`)
    console.log('Boa noite!!!')
}else if(horario == 1){
    console.log(`São ${horario}:${min} hora da madrugada`)
    console.log('Vai dormir seu doido.')
}else if(horario == 0){
    console.log('É meia noite!!!')
    console.log('Hora de dormir.')
}else{
    console.log(`São ${horario}:${min} horas da madrugada.`)
    console.log('Vai domir seu doido.')
}