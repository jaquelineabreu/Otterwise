//Ex.1
const user = {
  name: 'Marília',
  age: 26,
  job: 'Dev',
}

const userKey = Object.keys(user)
const userValue = Object.values(user)
for (let i = 0; i < userKey.length; i++) {
  console.log(`O valor da propriedade ${userKey[i]} é ${userValue[i]}`)
}

// //Ex.2
const users = [
  {
    name: 'Marília',
    age: 26,
    job: 'Dev',
  },
  {
    name: 'Juca',
    age: 21,
    job: 'RH',
  },
  {
    name: 'Flávia',
    age: 30,
    job: 'Financeiro',
  },
  {
    name: 'Sérgio',
    age: 24,
    job: 'Dev',
  },
]

const arrayJob = []
for (let i = 0; i < users.length; i++) {
  arrayJob.push(
    `${users[i].name} ${users[i].job.includes('Dev') ? '' : 'não '}é dev.`
  )
}

console.log(arrayJob.join(' '))
