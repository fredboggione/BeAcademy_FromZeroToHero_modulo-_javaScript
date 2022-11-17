// Operadores lógicos

// Operador de incremento e decremento - ++; --

let incrementNumber = 4
console.log(incrementNumber)
incrementNumber++
console.log(incrementNumber)
++incrementNumber
console.log(incrementNumber)

let decrementNumber = 50
console.log(decrementNumber)
decrementNumber--
console.log(decrementNumber)
--decrementNumber
console.log(decrementNumber)

//Operadores Aritméticos -> +; -; /; *; %;

let nota1 = 10
let nota2 = 4.5
let nota3 = 6.5
let nota4 = 7.8
let avg = (nota1+nota2+nota3+nota4)/4
console.log (avg)

//Operadores Relacionais e de Igualdade -> <>; ==; ===; !=; >=; <=;

let numberRelation1 = 10
let numberRelation2 = 50

let relation = numberRelation1 != numberRelation2
console.log(relation)
relation = numberRelation1 !== numberRelation2
console.log(relation)
relation = numberRelation1 == numberRelation2
console.log(relation)
relation = numberRelation1 === numberRelation2
console.log(relation)

//Operadores de atribuição

let newNumber = 20
newNumber += 40
newNumber *= 3
newNumber -= 60
newNumber /= 6
newNumber %= 5
console.log (newNumber)

//Operadores condicionais (Ternário) -> (condition) true: false

let value = 32
let value2 = 32

const newCondition = value >= value2 ? 'Isso é uma verdade' 
:value <= value2 ? 'Isso é uma verdade, segunda resposta true' : 'Resposta falsa para tudo!'
console.log(newCondition)