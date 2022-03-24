// sum of all arguments given in function 

const sum = (a, ...b) => {
    let add=0;
    for(let num of b){
         add=add+num;
    }
    add=add+a;
    return add;
}

console.log(sum(2, 4, 5, 6, 2, 7));