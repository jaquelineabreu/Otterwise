//foreach
const array = [10,20,30,40,50]

array.forEach(value => console.log(value))

array.forEach((elem,i,originalArray) => 
console.log(`${i}: ${elem}`, originalArray)
)