//Ex1
console.log('-----Ex1------\n')
myUser = {
  name: 'Mia',
  age: 2,
  email: 'mia@gmail.com',
}

console.log(myUser)

//Ex2
lista = ['a', 'b', 'c', 'd']
console.log('-----Ex2------\n')
console.log(lista[2])

//Ex3
console.log('-----Ex3------\n')
let dev = {
  name: 'Juca',
  projects: [
    { name: 'Projeto 1', start: '01/02/2021' },
    { name: 'Projeto 2', start: '03/03/2021' },
  ],
}

console.log(dev.name)
console.log(dev.projects[1])
console.log(dev.projects[0].name)

//Ex4
console.log('-----Ex4------\n')
var numeros = [1, -22, 3, 4, -5]

for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 10
}

console.log(numeros)
