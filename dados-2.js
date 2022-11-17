//  Manipulando Arrays

/* Separando um texto que contem espaços, em um novo array onde cada texto é uma posição do array */

let newPhrase = ("Fala meus queridos e queridas 😄 😆")

console.log(newPhrase)
let phraseToArray = newPhrase.split(' ') 
console.log(phraseToArray)

//tem um espaço entre as aspas, senao ele separa letra por letra.

// convertendo novamente um array para string

let phraseModify = phraseToArray.join(' ')
console.log (phraseModify)
console.log (typeof phraseModify)

// verificando se existe palavra ou string no início e no fim da frase

console.log (phraseModify.includes('meus'))

// string startwith
console.log(phraseModify.startsWith("Fa"))

// string endwith

console.log (phraseModify.endsWith('os',18))
console.log (phraseModify.endsWith("😆"))

