// 2 - Dado o array [‘C’, ‘B’, ‘A’], troque os valores das posições 0 e 2 e imprima o array final no console.
// Saída Esperada:
// [‘A’, ‘B’, ‘C’]

array = ['C', 'B', 'A']
aux = array[0]
array[0] = array[2]
array[2] = aux

console.log(array)
