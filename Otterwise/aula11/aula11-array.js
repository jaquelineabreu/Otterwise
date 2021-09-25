//Métodos de instancia

const arr = [1, 2, 3]

//PUSH
arr.push(5) //adiciona ao final
//Ele altera o array original / altera a instancia
console.log(arr)

//CONCAT - retona um novo array
//const newArray = arr.concat(5, 7, 9, [])
//const newArray = arr.concat([5, 7, 9], [[1]])
const newArray = [].concat(arr, [5, 7, 9])

console.log(newArray)

//JOIN
//se não colocar separador ele deixa o padrão que é a virgula
//const newArraj = arr.join()
const newArraj = arr.join(' | ')
console.log(newArraj)

//slice - cria um subarray
const arr2 = [10, 20, 30, 40]

const newArrays = arr2.slice(3)

console.log(newArrays)

//REVERSE
arr2.reverse() // ele altera o arrai original

console.log(arr2)

//pop - ele remote e retorna o ultmo elemento do array / ele altera o array original
const element = arr.pop()

console.log(element)

//SHIFT - Elimina o primeiro elemento
arr.shift()

console.log(arr)

//LENGTH - QUANTOS ELEMENTOS TEM NO ARRAY
console.log(arr.length)
