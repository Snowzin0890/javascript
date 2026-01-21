let res = document.querySelector('#res')

function info(n) {
    res.value += n
    res.focus()
}

function div() {
    res.value += '/'
}

function multi() {
    res.value += '*'
}

function soma() {
    res.value += '+'
}

function sub() {
    res.value += '-'
}

function calc() {
    try {
        res.value = eval(res.value)
    } catch {
        res.value = 'Erro'
    }
}

function limpar() {
    res.value = ''
}
