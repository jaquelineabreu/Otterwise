//array de objto
const array = [
    {name:'Érico', age: 29},
    {name:'Juca', age: 21},
    {name:'Márcia', age: 24},
]

const filteredArray = array.filter(elem =>{
    return elem.age >= 25
    //negando a condição
    return !(elem.age < 25)
})

console.log(array)
console.log(filteredArray)