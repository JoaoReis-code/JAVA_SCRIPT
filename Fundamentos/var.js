//var 
//funciona em todo o documento, e mais solta e liberada, 
//pois o JS primeiramente le todo o documento primeiro, e so depois, executa o documento 

var altura_1 = 5
var base_1 = 7 
area_1 = altura_1 * base_1

var area_1 // declaracao apos o uso 

//let
//A variavel let e de uso limitada ao escopo do bloco 
let forma_1 = "retangulo"
let altura_2 = 5 
let base_2 = 7
let area_2

if(forma_1 == "retangulo"){
    area_2 = "Area reatangulo " + (altura_2 * base_2)
}else if(forma_1 == "triangulo"){
    area_2 = ("Area triangulo" + (base_2 * altura_2))/2
}

//const
//Toda const precisa ter um valor fixo inicial 

//const forma_2 = "quadrado"
//const altura_3 = 5
//const base_3 = 5 
//const area

//if(forma_1 == "retangulo"){
//    area_3 = altura_3 * base_3
//}elseif(forma_1 == "triangulo"){
//    area_3 =(base_3 * altura_3)/2
//} retorna erro

//como a const vai sofrer modificacoes, o ideal seria colocar a let, que sera atribuida no escopo
const forma_2 = "quadrado"
const altura_3 = 5
const base_3 = 5 
let area_3 = 0

if(forma_2 == "quadrado"){
    area_3 = "Area reatangulo " + (altura_3 * base_3)
}else if(forma_2 == "triangulo"){
    area_3 = ("Area triangulo" + (base_3 * altura_3))/2
}

