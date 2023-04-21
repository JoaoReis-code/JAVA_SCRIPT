//Objeto
//criando objeto
const pessoa = {
    idade: 18,
    nome: "Joao",
    cpf: "11122233344",
    email: "joao@dominio.com"
};

//console.log(`O nome do pessoa e ${Pessoa.nome}, e sua idade e ${Pessoa.idade} `)
//console.log(`O nome do pessoa e ${Pessoa["nome"]}, e sua idade e ${Pessoa["idade"]}`)//Usa [""] quando nao se sabe oque o objeto retornara

const chaves = ["idade","nome","cpf","email"]

//chaves.forEach((chave) => {
//    console.log(`A chave  ${chave} tem valor ${pessoa[chave]}`)
//})

pessoa.telefone = "11 2222 4444"

//console.log(pessoa)//o objeto fica diferente do que foi declarado 

const pessoa_2 = {
  idade: 18,
  nome: 'Joao',
  cpf: '11122233344',
  email: 'joao@dominio.com',
  telefone: ['11 2222 4444',"11 8888 9999"]
}

//console.log(pessoa_2.telefone[1])//objeto preservando propriedades do array

pessoa.endereco = {//objeto recebendo um objeto  
  rua:"Rua Joao Pinheiro",
  numero: 330,
  apartamento: false,
  complemento:""
}

//console.log(pessoa.endereco)

pessoa_2.enderecos = [
  {
    rua:"Rua Joao Pinheiro",
    numero: 330,
    apartamento: false,
    complemento:""
  },
  {
    rua:"Rua Afonsopena",
    numero: 310,
    apartamento: true,
    complemento: "apt 202"
  }
]

//console.log(pessoa_2.enderecos)

//filtro para lista de objetos
const listaApartamentos = pessoa_2.enderecos.filter((endereco) => endereco.apartamento === true)

//console.log(listaApartamentos)


//Metodos de objeto

const cliente = {
  nome: "Joao",
  idade: 20,
  email: "joao@email.com",
  telefone: ["11 9999 8888","99 4444 8888","77 5555 3333"],
  saldo: 1000,

  saque: function(valor){
    if (valor > this.saldo){
      return "Saldo insuficiente"
    }else{
      this.saldo -= valor
      return `Saque realizado.Saldo atual =  ${this.saldo}`
    }
  }
}

//console.log(cliente.saque(450))


//chaves do objeto
const chavesObjeto = Object.keys(cliente)
//console.log(chavesObjeto)

//Percorrendo objetos de forma simples
function ligarParaCliente(cliente){
  cliente.telefone.forEach(numero => {
    console.log(`ligando para o numero ${numero}`)
  })

}

ligarParaCliente(cliente)