// 1- Declare uma variável de nome person

var person

console.log (typeof person)

/* 2- Que tipo de dado é a variável acima?

A variável acima é do tipo undefined.
*/



/* 3- Declare uma variável e atribua valores para cada um dos dados:
name: String
age: Number (integer)
weight: Number (float)
isAdmin: Boolean
isMan:boolean
*/

person = {
    name: "Fred",
    age: 32,
    weight: 102.5,
    isAdmin: true,
    isMan: true,
}


/* 4- A variável human abaixo é de que tipo de dados?

A variável human abaixo é do tipo Object.

4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

4.2 Mostre no console a seguinte mensagem,:
O humano <name> tem o peso <weight> Kg.
*/


let human = {
    name: "Fred",
    age: 32,
    weight: 102.5,
    isAdmin: true,
    isMan: true,
}
console.log(human)

console.log(`O humano ${human.name} tem o peso ${human.weight} Kg.`)


/*
5 - Declare uma variável do tipo Array, de nome humans e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/

let humans = []

/*
6 - Reatribua valor para a variável acima, colocando dentro dela o objeto human da questão 4 (Não copiar e colocar o objeto, mas usar o objeto criado e inserir ele no Array) 
 */

humans = [
    human,
]
console.log(humans)

/* 
7- Coloque no console o valor da posição zero do Array acima
 */

console.log(humans[0])

/* 
8- Crie um novo objeto newHuman e coloque na posição 1 do Array humans
 */

const  newHuman = {
    name: "Luan Monteiro",
    age: 30,
    weight: 90.1,
    isAdmin: true,
    isAMan: true
}

/* humans = [
    human,
    newHuman
] */

// ou

humans[1] = newHuman

console.log (humans)

/* 
9 - Sem rodar o código responda o resultado da saída abaixo:

a)
console.log(a)
var a = 1
resposta: 1 ... Correção... errei o correto é undefined

b)
let a
console.log(a)

{let a = 2
console.log(a)
}
console.log(a)

resposta: undefined; 2; undefined.

c)
console.log(b)

{let b = 3
console.log(b)
}
console.log(b)

resposta: undefined, 3, undefined
errei, o correto é erro,

d)
const c = 10

{
    console.log(c)
    const c = 20
    console.log(c)
}
 resposta:10,
 errei, retorna erro, pois constante nao pode ser mudada.
*/

console.log(a)
var a = 1
console.log(a)

console.log(b)


const c = 10

{
    console.log(c)
    const c = 20
    console.log(c)
}