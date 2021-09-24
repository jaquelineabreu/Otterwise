//arrow function
//const soma = (firstNum, secondNum) => firstNum + secondNum

//funcao anonima
// const soma = function (firstNum, secondNum) {
//   return firstNum + secondNum
// }
// console.log(soma(5, 8))

// //Dentro de um objeto
// const obj = {
//   name: 'teste',
//   func: soma,
// }

//ou ditemanete na minha propriedade
//Dentro de um objeto
// const obj = {
//   name: 'teste',
//   func: (firstNum, secondNum) => firstNum + secondNum,
// }
// console.log(obj.func(5, 8))

// //uma função pode ser um elemento array
// const soma = (firstNum, secondNum) => firstNum + secondNum
// const funcArray = [
//   soma,
//   (firstNum, secondNum) => {
//     return firstNum * secondNum
//   },
// ]
// console.log(funcArray[1](5, 8))

//uma função pode ser passada como argumento em uma chamada de outra função
// function aplica(func, value) {
//   return func(value)
// }

// function mult10(a) {
//   return a * 10
// }

// console.log(aplica(mult10, 9))
// aplica((a) => a * 10, 9)

//uma função pode ser o retorno da chamada de outra função
// function mult(a) {
//   return (b) => a * b
// }

// const func = mult(3) // func mul recebe 3
// console.log(func(2)) // func b receba a
// console.log(mult(3)(2))
