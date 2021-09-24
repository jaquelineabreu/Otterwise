//array de objto
const arrayObjt = [
    {name:'Érico', age: 29},
    {name:'Juca', age: 21},
    {name:'Márcia', age: 24},
]
let everyElem = arrayObjt.every(elem => elem.age > 25)
console.log(arrayObjt)
console.log(everyElem)



//usando de forma booleana
const arrayNum = [0,1,2,3,4,5]

const everyElemNum = arrayNum.every(elem => elem)
console.log(everyElemNum)


