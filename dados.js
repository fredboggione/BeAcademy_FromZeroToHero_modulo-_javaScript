// Type conversion

// Convertendo String para number e number para string

// No caso abaixo é possível ver que há a concatenação entre a string e o número informado

console.log ("9" + 56)  // Resultado 956

// Para realizar a conversão utiliza-se number constructor e string constructor nativo do javascrip para conversão

/* console.log (Number("9") + 56)
console.log (String (9) + ' <= virou string') */

// Contar carcateres

let oneWord = 'Moacir'
console.log (oneWord.length)

// Maiúsculas e Minúsculas

let phrase = 'Esse ano tem copa do mundo e estou aqui aprendendo no From Zero to Hero'

console.log(phrase.toUpperCase())
console.log(phrase.toLocaleLowerCase())

// Convertendo para inteiro

let decimalNumber = 10.6
console.log (parseInt(decimalNumber))

// caso queira arredondar o numero

console.log (parseInt(Math.round(decimalNumber)))
console.log(decimalNumber.toFixed())

// Determinando o numero de casas decimais

let niceNumber = Math.PI

console.log(niceNumber)
console.log (niceNumber.toFixed(3))
console.log(niceNumber.toFixed(3).replace('.',','))

