//Json 
//O Json server para fazer a notacao de objetos em JS e varias outras linguagens 
//O formato json possui algumas diferencas:
//Nao possui variaveis
//As chaves das propriedades possuem ""
//Arrays e objetos nao podem existir
//Proibido ter uma virgula no ultimo item 
//Funcoes nao sao permitidas
//Comentarios nao sao permitidos
//Suportao apenas tipos primitivos (string,boolean,number,null)


const dados = require("./ArquivosJson/json.json")
//console.log(dados, typeof(dados))

const objtEmString = JSON.stringify(dados)
//console.log(objtEmString)


//Encontrando objetos
const clientes = require("./ArquivosJson/clientes.json")

function buscarObjt(json, chave,valor){
    return json.find((item) => item[chave].includes(valor))
}

const procurado = buscarObjt(clientes, "nome", "Juliet")
const procurado_2 = buscarObjt(clientes, "telefone", "11998123183")

console.log(procurado)
console.log(procurado_2)