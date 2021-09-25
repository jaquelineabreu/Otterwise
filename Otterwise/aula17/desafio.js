//Desafio
const colaboradores = [
    { name: 'Juca', idade: 25, cargo: 'front-end'},
    { name: 'Márcia', idade: 23, cargo: 'back-end'},
    { name: 'Vitória', idade: 28, cargo: 'designer'},
    { name: 'Fernando', idade: 19, cargo: 'estagiario'},
    { name: 'Fabiane', idade: 25, cargo: 'back-end'},
    { name: 'Jéssica', idade: 23, cargo: 'front-end'},
]

//a) quantos colaboradores tem em cada um do cargos - saida esperada: {front-end: 2, back-end: 2, designer: 1, estagiario: 1}
let front = 0, back = 0, designer = 0, estagio = 0
function cargo(){
    for(let i = 0; i < colaboradores.length; i++){
        if(colaboradores[i].cargo === 'front-end'){
            front++  
        }else if(colaboradores[i].cargo === 'back-end'){
            back++
        }else if(colaboradores[i].cargo === 'designer'){
            designer++
        }else{
            estagio++
        }        
    }
    return `{front-end: ${front}, back-end: ${back}, designer: ${designer}, estagiario: ${estagio}}`
}

//console.log(cargo())

//b)imprima no console o array colaboradores ordenado por idade de forma decrescente
const arrayDesc =  colaboradores.sort((a,b)=>{ return b.idade - a.idade})
//console.log(arrayDesc)

//c)imprima no console o array colaboradores ordenado por cargo, sendo a orgem estagiario, front, backend, designer
//estagiario, front, backend, designer
const ordem = ['estagiario','front-end', 'back-end', 'designer']


let findElemObj = colaboradores.find(elem => {
    return elem.cargo === 'front-end'
})

console.log(findElemObj)

//d)imprima no console o array colaboradores por idade de forma crescente, em caso de emáte a ordem deve ser feita pro cargo

