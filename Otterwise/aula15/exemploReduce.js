const array = [1, -2, 3, -42, 50]
                        //acumulado + elemento que esra sendo iterado
const sum = array.reduce((acc,elem) =>{
    console.log('acc: ', acc, 'element:',elem)
    return acc + elem
}, 0)//elemento inicial

console.log(sum)

//{negativos: [-42, -100, 8.5], positivos: [20, 200, 20]}

const obj = array.reduce(
    (acc,elem) =>{
    console.log('acc: ', acc)
    if(elem < 0){
        acc.negativos.push(elem)
    }else{
        acc.positivos.push(elem)
    }
    
    return acc
},{
    negativos:[],
    positivos: [],
})

console.log(obj)