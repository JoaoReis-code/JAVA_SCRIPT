//Boolean
//possuem dois valores true e false
const verdadeiro = true
const falso = false

//Comparacoes numericas
numero_x = 1 
numero_y = 2

//console.log("Numeros diferentes " + (numero_x == numero_y))
numero_y = 1
//console.log("Numeros iguais " + (numero_x == numero_y))
numero_y = "1"
//console.log("Numeros iguais, porem de tipos diferentes " + (numero_x == numero_y))


//Diferecan pro "==" para "==="
//Os "==" (comparacao implicita) e "===" (comparacao explicita)

//console.log("Numeros iguais, porem de tipos diferentes === " + (numero_x === numero_y))


//Comparacoes com strings 
texto_1 = "Hellow World"
texto_2 = "Hellow"

//console.log("Strings de tamanhos diferentes " + (texto_1 === texto_2))//Retorna false pois sao de tamanhos diferentes
texto_2 = "Hellow World"
//console.log("Strings de tamanhos iguais " + (texto_1 === texto_2))


//truthy e falsy
//valores 0 e 1 sao interpretados como false e true respectivamente
//Null e um tipo de dados que representa vazio  -> ""

varNull = null

//console.log("Numero 0 " + (0 == falso))
//console.log("Numero 1 " + (1 == verdadeiro))
//console.log("Var NUll " + (varNull == null))


//operador ternario 
idadeMinima = 18
idadeCliente = 16

if(idadeCliente >= idadeMinima){
    console.log("cerveja")
}else{
    console.log("suquinho")
}

//tudo antes do "?" representa a comparacao.O que vem em seguida do "?" representa o resultado da operacao se verdadeira, e o segundo, se falsa.
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suquinho")