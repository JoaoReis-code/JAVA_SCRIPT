//Arrays

//Array numerico
let notas = [10, 5, 8, 6, 9, 8.5, 6.5]


//Array strings
let textos = ["aaa", "bbb", "ccc", "ddd"]


//Array aleatorio
let random = ["batata", 34, 7, "oi", 2, "$"]


//Metodos do array

//push
//console.log("Notas = " + notas)
notas.push(9.5)
//console.log("Notas depois do push = " + notas)

//pop
//console.log("Random = " + random)
random.pop()
//console.log("Rando de pois do pop = " + random)


//slice
const alunos = ['João',
  'Juliana',
  'Ana',
  'Caio',
  'Lara',
  'Marjorie',
  'Guilherme',
  'Aline',
  'Fabiana',
  'Andre',
  'Carlos',
  'Paulo',
  'Bia',
  'Vivian',
  'Isabela',
  'Vinícius',
  'Renan',
  'Renata',
  'Daisy',
  'Camila']

const sala1 = alunos.slice(0,(alunos.length/2)) 
const sala2 = alunos.slice((alunos.length/2))

//console.log("Sala 1 = " + sala1)
//console.log("Sala 2 = " + sala2)


//concat
const salasjuntas = sala1.concat(sala2)

//console.log(salasjuntas)


//splice
const nomes = ['João',
  'Juliana',
  'Ana',
  'Caio',
  'Lara',
  'Marjorie',
  'Guilherme']

nomes.splice(1,2)//remove 2 elementos a partir da posicao 1
//console.log(nomes)


//Matriz
const estudantes = ['João',
'Juliana',
'Ana',
'Caio',]
const idades = [17,46,23,18]
const alunosIdades = estudantes+idades

//console.log(`${alunosIdades[0][0]} tem idade ${alunosIdades[1][0]}`)


//indexOf (Pesquisa)
estudantes.push("Lucas")
const index = estudantes.indexOf("Lucas")
//console.log("Index = " + index)

//loop  padrao
function media() {
  let soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma / arguments.length;
}

//console.log(media.apply(null, notas))


//loop com for of 
let somaNotas = 0 
for(let nota of notas){
    somaNotas += nota  
}

const medias = somaNotas/notas.length
//console.log(medias)
 

//loop forEach
let somaNotas_2 = 0
notas.forEach((nota) => {
  somaNotas_2 += nota
})

let media_2 = somaNotas_2/notas.length
//console.log(media_2) 


//filter
const abaixoDaMedia = notas.filter((notas) => notas < 7)
const acimaDaMedia = notas.filter((notas) => notas >= 7)

//console.log(abaixoDaMedia)
//console.log(acimaDaMedia)


//spread(clonar array)
let novasNotas = notas//A partir desse momento,que o array novasNotas recebe notas,para o JS, eles se tornam apenas um  
novasNotas.push(3.3)

//console.log("Novas notas = " + novasNotas)
//console.log("Notas originais = " + notas)

let novasNotas_2 = [...notas]//Assim o array vira independende do que recebeu os valores antigos 
novasNotas_2.push(5)

//console.log("Novas notas 2  = " + novasNotas_2)