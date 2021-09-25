//Desafio 1 - Jaqueline
let objetos = [
  { nome: 'Juca', idade: 25, cargo: 'front-end' },
  { nome: 'Márcia', idade: 23, cargo: 'back-end' },
  { nome: 'Victória', idade: 28, cargo: 'designer' },
]

function orderUsers(x) {
  let menor = x[0].idade
  for (let i = 1; i < x.length; i++) {
    if (x[i].idade < menor) {
      menor = x[i]
    }
  }

  let aux = x[0]
  x[0] = menor
  x[1] = aux

  return console.log(x)
}

orderUsers(objetos)
