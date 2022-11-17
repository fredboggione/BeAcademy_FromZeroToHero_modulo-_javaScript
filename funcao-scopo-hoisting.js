// Parte 1
// Persebe-se nesa parte que a função possuí um escopo local e ao ser acionada puxa a variável global assunto declarada. O retorno desta no console é undefined

/* let assunto

function criarAssunto(assunto) {
    return assunto
}

console.log(criarAssunto(assunto))
 */
// Parte 2

// Neste caso, ao se definir a variável global e declara-la na função o retorno, tanto da variavel global (primeiro console.log) e da função retornam a resposta 'Estudar'.

/* let assunto = 'Estudar'

function criarAssunto(assunto) {
    return assunto
}
console.log(assunto)
console.log(criarAssunto(assunto)) */


// Parte 3
// Agora a variável de escopo local recebeu um novo parâmetro 'Escutar Musica', ou seja, a variável global (primeiro console.log) vai receber 'Estudar' e após convocar a função recebendo o parâmetro da variável global, ela sera redefinida para 'Escutar Música'
// Obs. é possível perceber que após a execução da função a variável global não foi redefinida, ou seja o assunto 'Escutar Música' atuou apenas em escopo local.

/* let assunto = 'Estudar'

function criarAssunto(assunto) {
    assunto = 'Escutar Música'
    return assunto
}
console.log(assunto)
console.log(criarAssunto(assunto))
console.log(assunto) */

//Parte 4
// A mudança agora foi a retirada da obrigatoriedade da função em receber um parâmetro. Percebe-se assim que a variável de escopo global é quem é tratada tando globalmente quanto localmente.

/* let assunto = 'Estudar'

function criarAssunto() {
    assunto = 'Escutar Música'
    return assunto
}
console.log(assunto)
console.log(criarAssunto(assunto))
console.log(assunto)
 */

//Hoisting

// A função tradicional indicada abaixo sofre o processo de hoisting, ou seja ela é prioritária em relação a chamada da função.

/* digaMinhaIdade()

function digaMinhaIdade() {
    console.log (30)
} */

// Callback function
// É uma função no qual se passa o parâmetro dentro de uma função e quando invocar a função, basta criar outra função que utilize os parâmetros passados nela.

                    //function
/* function minhaFuncao (Callback) {
    console.log ('Inicio da função')

    Callback (15, 15)

    console.log ('Fim da função')

}

minhaFuncao (
    (num1, num2) => {
        return console.log (num1 + num2)
    }
) */

function Sum () {
    this.num1,
    this.num2,
    this.calc = function (num1, num2) {
        return total = num1 + num2
    }
}

/* const math = new Sum()
const num1 = math.num1 = 24
const num2 = math.num2 =32

console.log (num1)
console.log (num2)
console.log (math.calc(num1,num2))

// Vamos chamar a função Sun novamente para outra variável

const math2 = new Sum()
const number1 = math2.num1 = 50
const number2 = math2.num2 = 30
console.log (math2.calc(number1,number2)) */

// Outra forma é chamando o objeto e ja passando os parâmetros para o mesmo

/* const math = new Sum().calc(45,45)
console.log(math) */

const data = new Date()
console.log(data)
console.log(data.getUTCDate())