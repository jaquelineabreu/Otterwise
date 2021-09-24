const array = [10,20,30,40,50]

const findElem = array.find(elem => {
    return elem > 30
})

//array de objto
const arrayObjt = [
    {name:'Érico', age: 29},
    {name:'Juca', age: 21},
    {name:'Márcia', age: 24},
]

let findElemObj = arrayObjt.find(elem => {
    return elem.name === 'Maria'
})

if(!findElemObj){
    console.log('Não encontrei o elemento')
    //tratamento em caso de não encontrar
    findElemObj = {name:'Default User'}
}

console.log(findElem)
console.log(findElemObj)