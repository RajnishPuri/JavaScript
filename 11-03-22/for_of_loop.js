//for of loop
let fruits=["apple", "manga", "banana"];
let fruits2=[];
for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

//for in loop
for(let index in fruits){
    console.log(fruits[index]);
}
//for in loop gives the index position of the array