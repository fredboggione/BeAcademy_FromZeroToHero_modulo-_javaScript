// Exemplo 1
// Method
function myFirstFunction () {
    // Entra com o código

    console.log ('Olha a função sendo executada')
}
//Execute function
myFirstFunction()

// Exemplo 2

// Os termos passados dentro do parênteses são denominados argumentos ou parâmetros
// number1 recebeu 54 e number2 recebeu 32

function sum(number1, number2) {

    console.log( number1 + number2)
}

// Os argumentos são declarados ao invocar a função

sum( 54, 32)

// Exemplo 3

// Caso declare e execute uma função sem um retorno, como a do exemplo 2, ela somente é executada, retornando void (vazio).
// O exemplo abaixo mostra uma função que retorna um parâmetro

function myFirstFunctionWithReturn(num1, num2) {
    let total = num1 + num2
    return total
}

console.log(myFirstFunctionWithReturn(20,20))

// Exemplo 4

// Restaurante

function meuPratoDeComida (comida1, comida2, comida3, comida4) {
    return `Meu prato de comida contém ${comida1}, ${comida2}, ${comida3}, ${comida4}.`
}

const prato = meuPratoDeComida('arroz',"feijão",'macarrao','bife')
console.log (prato)

// Exemplo 5

// arrow function

const myFirstArrowFunction = (number1, number2) => {
    let total = number1 + number2
    return total
}

const result = myFirstArrowFunction (30, 50)
console.log(result)
