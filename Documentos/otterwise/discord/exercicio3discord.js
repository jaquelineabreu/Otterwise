// 3 - Faça uma função que recebe como argumento um array com dois valores numéricos e deve retornar o
// array ordenado de forma ordem crescente. Imprima no console o array final.
// Exemplo Entrada 1:
// [5, 8]
// Exemplo Saída 1:
// [5, 8]
// Exemplo Entrada 2:
// [19, 2]
// Exemplo Saída 2:
// [2, 19]

crescente = [19, 2]
function arrayDoisValores(x) {
  if (x[0] > x[1]) {
    aux = x[0]
    x[0] = x[1]
    x[1] = aux
  }
  return console.log(x)
}

arrayDoisValores(crescente)
