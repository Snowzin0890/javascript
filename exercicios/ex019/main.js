function veri(){
    let num1 = Number(window.document.querySelector('input#num').value)
    let num2 = Number(window.document.querySelector('input#num2').value)
    let res = window.document.querySelector('div#resultado')
    let type1 = num1 % 2 == 0 ? 'Par' : 'Impar'
    let type2 = num2 % 2 == 0 ? 'Par' : 'Impar'

    if(num1 > num2){
        res.innerHTML = `${num1} é maior que ${num2}| ${num1} é ${type1} e ${num2} é ${type2}.`
    }else if(num1 == num2){
        res.innerHTML = `${num1} é igual a ${num2}| ${num1} é ${type1} e ${num2} é ${type2}.`
    }else{
        res.innerHTML = `${num1} é menor que ${num2}| ${num1} é ${type1} e ${num2} é ${type2}.`
    }
}