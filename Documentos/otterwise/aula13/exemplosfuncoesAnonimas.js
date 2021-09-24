//função anonima
function (f1,f2){
    return f1 + f2
}

//self-executing anonymous function
(function (f1, f2){
    return f1 + f2
})(1,2) // retorna 3 

const result = (function (f1, f2){
    return f1 + f2
})(1,2) // retorna 3 


//Arrow Function
const result = ((f1, f2) => {
    return f1 + f2
})(1,2) 

//quando apenas uma expressão posso deixar mais compacto
// o que estiver depois da seta é o que será retornado - return implito 
const result = ((f1, f2) => f1 + f2 )(1,2)
 
//Quando 1 argumento pode suprimir os parenteses
const result = (value => {
    console(value)
})(1) 

//sem argumentos
const result = (() => {
    console('Hello Word')
})()




//funnção regular
function soma (f1, f2){
    return f1 + f2
}// retorna 3 

//funcao com valor em uma propriedade ocmo objeto

