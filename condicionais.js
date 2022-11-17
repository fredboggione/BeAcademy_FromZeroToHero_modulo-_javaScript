/* IF and ELSE
   se  e  senao */

   let num = 20

   if (num >= 10) {
    console.log( "o numero é maior ou igual a 10")
   } else {
    console.log("O numero não é maior ou igual a 10")
   }

   /* IF and ELSE
   com condiçoes de and && or || ou not ! */

/*    let num1 = 20
   let num2 = 30

   if (num1 >= 10 && num2 > 20) {
    console.log( "verdade")
   } else {
    console.log("mentira")
   } */

   let num1 = 20
   let num2 = 30

   if (num1 >= 10 && num2 > 20) {
    console.log( "verdade")
   } else if (num1>=10 && num2<= 20) {
    console.log("verdade2")
   } else {
    console.log('Mentira')
   }



// Switch

let myExpression = 'x'

switch (myExpression) {
    case 'a':
        console.log('Você apertou a tecla a')
        break
    case 'b':
        console.log('Voce apertou a tecla b')
        break
    case 'c':
        console.log('Voce apertou a tecla c')
        break
    default:
        console.log( 'Voce apertou outra tecla ' + myExpression)
        break
}

function myCalc (num1,num2,operator) {
    let result

    switch (operator) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case "/":
            result = num1 / num2
            break
        default:
            console.log (`Operador inválido ${operator}`)
            break

            
        }
    return result
        
}

console.log (myCalc(4,7,"/"))

//Throw Try Catch

//O Throw ao ser executado interrompe o restante da compilação da função. O Try Catch tenta tratar o erro caso ele venha a ocorrer.

function myAge(myage) {
    if (!myage) {
        throw 'Você não passou um parâmetro'
    }

    console.log ('Eu executei depois do erro')
}

try {
    myAge()
    console.log ('Já tratei o erro')
} catch(error) {
    console.log(error)
}

console.log ('A execução foi continuada')