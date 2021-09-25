const obj = {
  name: 'Erico',
  age: 29,
  job: 'Dev',
}

const obj2 = {
  street: 'Rua 1',
  number: '101',
}

console.log(Object.assign(obj, obj2, { bank: 001 }))
console.log(obj)
console.log(obj2)
// const objKeys = Object.entries(obj)
// console.log(objKeys)
// for (let i = 0; i < objKeys.length; i++) {
//   console.log('prop: ', objKeys[i][0])
//   console.log('value: ', objKeys[i][1])
// }
