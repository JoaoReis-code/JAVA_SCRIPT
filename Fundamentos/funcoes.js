//Funcao padrao JS e outras linguagens
//Executa um trecho de codigo
function subtrai(){
    return 10-2
}

//console.log("Resultado da subtracao = " + subtrai())


//Recebe um valor "x", chamado de parametro, e executa um trecho de codigo
function quadrado(x){
    return x*x
}

let x = 9 
//console.log(quadrado(x))


//Recebe um valor e retorna algo
let a = 2
let b  = 3

function soma(a,b){
    return a+b
}

let resultado = soma(a,b)
//console.log(`O resultado da soma = ${resultado}`)
//console.log(soma(a,b)) -> mesma resultado


//Parametro com valor padrao
function dividir(z=10,w=5){
   return (z/w)
}

//console.log("Valor Padrao = " + dividir())
//console.log("Valores passados = " + dividir(30,5))


//Expressao de funcao
const area = function (lagura,altura){return lagura * altura}
//console.log(`Area do quadrado = ${area(12,21)}`)


//Arrow function 
const triangulo = (base, altura) => (base * altura)/2 
//console.log(`Area do triangulo = ${triangulo(5,10)}`)

const saque_saldo = (saque) => {
    saldo = 1000

    if(saque > 1000){
        return `Voce so possui ${saldo} em conta, portanto, nao pode sacar ${saque}!`
    }else{
        saldo = saldo - saque
        return `Voce sacou ${saque}. Agora seu saldo e ${saldo}.`
    }
}

console.log(saque_saldo(555))
console.log(saque_saldo(33345))