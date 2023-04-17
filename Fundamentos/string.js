//Strings 

//Tudo que esta entre strings o JS entende como um texto
texto_1 = "Hellow World!"
texto_2 = 'Hellow World!'


//citacao
texto_3 = "Hellow 'World'"


//concatenacao de strings (+)
texto_4 = "Eu gosto de bolo"
texto_5 = "Eu gosto de "
texto_6 = "Bolo"

console.log(texto_5 + texto_6)


//concatenacao de strings e variaveis
texto_7 = `Eu gosto de ${texto_6}`


//Manipulando strings
//objeto string
const numero = 144
const numeroEmString = String(numero)

const num = 1000
console.log(num.toString())

const palavra = "Minecraft"


//Numero de caracteres da string
console.log(palavra.length)


//Numero na posicao x (lembrando q comeca a contar no 0) 
console.log(palavra.charAt(5))


//Encontrar a posicao de uma letra (retorna apenas a primeria ocorrencia d ocaractere)
console.log(palavra.indexOf("c"))


//LowerCase e UpperCase
console.log(palavra.toLowerCase())
console.log(palavra.toUpperCase())


//Cortar strings
let frase = "Vasco nao e time, Vasco e selecao"
console.log(frase.slice(0,5))


//Replace
let desconto = "25%"
frase = "Estamos com 50% de desconto na loja"

console.log(frase.replace("50%",desconto))


//Split
let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++"
let arrayLinguagens = linguagens.split(";")

console.log("Linguagens:")
for(i=0;i<arrayLinguagens.length;i++){
    console.log(arrayLinguagens[i])
}


//Trim

let login = "   dfdgdh@emailteste.com      "
let loginCerto = login.trim()
console.log(loginCerto)
