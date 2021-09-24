const array = [10,20,30,40,50]

const mappedArray = array.map(elem => {
    return elem * 10
})

//exemplo com i
const mappedIArray = array.map((elem, i) => {
    return elem * i
})

//exemplo com i
const mappedStringArray = array.map(elem => {
    return `R$ ${elem.toFixed(2)}`
})

console.log(mappedArray)
console.log(mappedIArray)
console.log(mappedStringArray)
