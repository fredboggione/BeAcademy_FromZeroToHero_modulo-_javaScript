// Declarar Objetos

const human = {
    name: "Fred",
    age: 30,
    weight: 120,
    isAthlete: true,
    walk: function walking() {
        console.log('Eu ando bastante')
    }
} // Exemplo de objeto


// console.log(human.age)
// console.log(human.name)
// console.log(human.walk())

// Exemplo de concatenação

// console.log( "O nome do humano " + human.name + " tem a idade de " +human.age )

// // Exemplo de interpolação

// console.log(`O nome do humano ${human.name} tem a idade de ${human.age}`)

const animals = [
    "Elefante", // 0
    "Gato", // 1
    "Leão", // 2
    "Cachorro", // 3
    {//4
        name:"moacir",
        age:2,
        weight: 4
    }
]// Tamanho 5

console.log(animals[4].name)