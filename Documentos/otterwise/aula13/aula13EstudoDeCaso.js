//Estudo de caso
//Switch case, else if X object

//FUNÇÃO COM IF
function getTypeId(type) {
  // cara de dicionario
  if (type === 'front-end') {
    return 1
  } else if (type === 'banck-end') {
    return 2
  } else if (type === 'devops') {
    return 3
  }
}
//getTypeId('front-end')

//FUNÇÃO COM SWITCH
function getypeId(type) {
  // cara de dicionario
  switch (type) {
    case 'front-end':
      return 1
    case 'back-end':
      return 2
    case 'devops':
      return 3
  }
}
//getTypeId('front-end')

//COM OBJECT - mais compacta - melhor em perfomace
const typeIds = {
  'front-end': 1,
  'back-end': 2,
  devops: 3,
}
//typeIds['front-end']

const users = [
  { name: 'Marilia', age: 26, job: 'Dev' },
  { name: 'Juca', age: 21, job: 'RH' },
  { name: 'Flávia', age: 30, job: 'Financeiro' },
  { name: 'Sérgio', age: 24, job: 'Dev' },
]

//Solução normalmente mais usada
const getColorByJob = (user) => {
  switch (user.job) {
    case 'Dev':
      return 'Blue'
    case 'RH':
      return 'Yellow'
    case 'Financeiro':
      return 'Green'
  }
}

console.log(getColorByJob(users[2]))

//Solução ideal
const colorByJob = {
  Dev: 'Blue',
  RH: 'Yellow',
  Financeiro: 'Green',
}

console.log(colorByJob[users[2].job])
