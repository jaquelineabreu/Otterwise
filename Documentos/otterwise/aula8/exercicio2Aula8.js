//array = ['C','B','A']

array = ['C', 'B', 'A']

// array2 = []
// array2[0] = array[2]
// array2[1] = array[1]
// array2[2] = array[0]

// console.log(array2)

//solução ericolet
let aux = array[0]
array[0] = array[2]
array[0] = aux
