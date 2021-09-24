const x = 10

const resp = x < 10 ? 'É menor que 10' : 'É maior ou igual a 10'
console.log(resp)

//Ternario tambem pode ser parametro de função - ex:
function print(value) {
  console.log(value)
}

print(x < 10 ? 'É maior que 10' : 'É maior ou igual a 10')
