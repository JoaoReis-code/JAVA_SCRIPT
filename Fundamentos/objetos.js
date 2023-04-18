//Objeto
//criando objeto
const cliente = {
    idade: 18,
    nome: "Joao",
    cpf: "11122233344",
    email: "joao@dominio.com"
};

//console.log(`O nome do cliente e ${Pessoa.nome}, e sua idade e ${Pessoa.idade} `)
//console.log(`O nome do cliente e ${Pessoa["nome"]}, e sua idade e ${Pessoa["idade"]}`)//Usa [""] quando nao se sabe oque o objeto retornara

const chaves = ["idade","nome","cpf","email"]

chaves.forEach((chave) => {
    console.log(`A chave  ${chave} tem valor ${cliente[chave]}`)
})

cliente.telefone = "11 2222 4444"

console.log(cliente)//o objeto fica diferente do que foi declarado 

const cliente_2 = {
  idade: 18,
  nome: 'Joao',
  cpf: '11122233344',
  email: 'joao@dominio.com',
  telefone: ['11 2222 4444',"11 8888 9999"]
}