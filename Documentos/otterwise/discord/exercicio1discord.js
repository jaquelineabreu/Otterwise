// 1 - Tendo como informação dois valores, value1 e value2, faça um programa que imprima os dois valores no console.
// Após imprimir, troque a informação de value1 pela informação do value2 e imprima no console novamente.
// Exemplo Entrada:
// 3
// 12

// Exemplo Saída:
// Valor 1 = 3
// Valor 2 = 12
// Valor 1 = 12
// Valor 2 = 3

value1 = 2
value2 = 4
console.log(`Valores = ${value1} e ${value2}`)
aux = value1
value1 = value2
value2 = aux
console.log(`Valores = ${value1} e ${value2}`)
