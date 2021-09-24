//array de objto
const array = [
    {name:'Érico', age: 29},
    {name:'Juca', age: 21},
    {name:'Márcia', age: 24},
]

const arrayNum = [-42, -100, -8.5, 20, 200, 20]


const sorteArray = arrayNum.sort((a,b) => {
    // if(a < b){
    //     return -1
    // } 
    // if(a > b){
    //     return 1
    // }
    // if(a === b){
    //     return 0
    // }

    //MUDOU PARA
    // if (a - b < 0) return a - b // o return pode ser qualquer valor negativo
    // if (a - b > 0) return a - b // 
    // return a - b
    //MUDOU PARA
    return a - b


})

//MUDOU PARA
const sorteArray = arrayNum.sort((a, b) => a - b)

console.log(sorteArray)
