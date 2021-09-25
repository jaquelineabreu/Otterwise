// 4 - Faça um algoritmo que percorre um array e imprime o menor valor.
// Exemplo Entrada 1:
// [5, 8, 13, 1, 7]

// Exemplo Saída 1:
// O menor valor é 1

// Exemplo Entrada 2:
// [23, -99, -10, 5, 60]

// Exemplo Saída 1:
// O menor valor é -99

//let numeros = [5, 8, 13, 1, 7]
let numeros = [23, -99, -10, 5, 60]

menor = numeros[0]
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < menor) {
    menor = numeros[i]
  }
}

console.log(`O menor valor é: ${menor}`)
