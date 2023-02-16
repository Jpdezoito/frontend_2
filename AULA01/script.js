let array = [1,2,3,4]
let total = 0
for(let i = 0; i < array.length; i++){
    total += array[i]    
}

console.log(total)


let soma1 = array.reduce(function(soma, i) {
    return soma + i;
})

console.log(soma1)