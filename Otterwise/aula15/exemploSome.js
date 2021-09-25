//array de objto
const arrayObjt = [
    {name:'Érico', age: 29},
    {name:'Juca', age: 21},
    {name:'Márcia', age: 24},
]
let someElem = arrayObjt.some(elem => elem.age < 25)
console.log(someElem)