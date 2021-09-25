//Uma função pode ser atribuida a uma variavel ou constan
//const soma = ((f1, f2) => {
 //   return f1 + f2
//})(1,2) 

const soma = (f1, f2) => f1 + f2

console.log(soma)
console.log(soma(5,8))

const obj = {
    name:'teste',
    func:soma,
}

console.log(obj.func(5,8))

//funcao como elemento do array
//const FuncArray = [soma, (f1,f2) => f1 * f2]
//console.log(FuncArray[0](5,8))

const FuncArray = [
    soma, 
    (f1,f2) => {
    return f1 * f2
 },
]

console.log(FuncArray[1](5,8))

//uma função pode ser passada ocmo argumento em uma chamada de outra função
function aplica(func, value){
    return func(value)
}

function mult10(a){
    return a * 10
}

console.log(aplica(mult10, 9))

console.log(aplica(a => a * 10,9))

//funcao pode ser o retorno da chamada de outra função
function mult(a){
    //arrow function
    return b => a * b
}
mult(3)(2)

const func = mult(3)

console.log(func(2))