// FOR

/* for (let i = 10; i>=1; i--) {
    console.log(i)
}
 */

/* Na estrutura do for pode-se utilizar os comandos break - para parar a estrutura de repetição caso a condição seja atendida. 

O comando continue não executa as instruções caso a condição seja atendida, mas continua a execução do for até a condição de parada */

/* for (let i = 10; i>=1; i--) {
    if (i === 5) {
        continue
    }
    console.log(i)
} */

/* Estrutura WHILE
no while deve-se informar um incremento, senao a estrutura entra em loop infinito */

/* let interator = 1

while (interator <= 15) {
    console.log(interator)

    interator++
} */

let number = [1,3,5,7,9,10]

// num = elementos contidos dentro de number (FOR OF)
// FOR OF - Trabalha com os valores do array

/* for (num of number){
    console.log(num)
} */

// num = indice dentro de number ( FOR IN)
// FOR IN - Trabalha com o índice do array

/* for (num in number){
    console.log(num)
    
} */

// FOR IN funciona em objetos

let animals = {
    name: 'leao',
    weight: '200',
    age: 4
}

for (item in animals) {
    // retorna o nome das propriedades do objeto
    // console.log (item)

    // retorna o resultado da propriedade "age", porém executa a repetiçao 3x, sendo uma para cada propriedade dentro do objeto
    // console.log (animals["age"])
    
    // retorna todo o objeto ( propriedades e valores), porém executa a estrutura de repetição para cada elemento do objeto
    // console.log (animals)

    //Retorna o valor das propriedades do objeto
    // console.log (animals[item])

    //retorna o valor da propriedade name, porém 3x uma vez para cada propriedade dentro do objeto.
    console.log (animals.name)
}


