function calculate(x, y, z) {
  if (x == 'soma') {
    return y + z
  } else if (x == 'subtrai') {
    return y - z
  } else if (x == 'multiplica') {
    return y * z
  } else if (x == 'dividi') {
    return y / z
  } else {
    console.log('Digite uma das operações basicas')
  }
}
console.log(calculate('dividi', 3, 5))

//console.log(calculate('soma', 3, 5))
//solução com switch
function calculate2(operador, n1, n2) {
  switch (operador) {
    case 'soma':
      return n1 + n2

    case 'subtrai':
      return n1 - n2

    case 'multiplica':
      return n1 * n2

    case 'divide':
      return n1 / n2

    default:
      return console.log('Não existe essa operação')
  }
}

console.log(calculate2('multiplica', 3, 5))
