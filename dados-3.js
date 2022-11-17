// Manipulando Arrays

const animals = ['galinha','rato','cao','elefante','leao']
console.log(animals)

// Adicionando item no fim do array

/* console.log(animals.push('bode'))
console.log(animals)
 */
// adicionando item no começo do arry

/* console.log(animals.unshift('javali'))
console.log(animals) */

// Remover item do fim
/* console.log (animals.pop())
console.log(animals) */

// Remover item do começo
/* console.log(animals.shift())
console.log(animals) */

// Pegar somente alguns elementos do array
// Critério: Não modificar o array

console.log(animals.slice(0,3))
// o item acima traz uma cópia do array indicado, o array nao foi modificado.
console.log(animals)

//Encontrar posição no array e remove-lo

let index = animals.indexOf('cao')
console.log(index)
animals.splice(index,1)
console.log(animals)