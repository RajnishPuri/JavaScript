// There are two method for iterate the object
// 1. For in Method
// 2. Object.keys Method

// for in Method

const person = {
    name : "Raj",
    Age : 23,
    "Person Hobbies" : ["chess", "cricket"],   
};

for(let key in person){
    console.log(person.key);  // this gives undefined because dot method searches for key in person object and key is not present there so it throws undefined
}

for(let key1 in person){
    console.log(person[key1]);   // it shows all the value of variable inside the object
}

for(let key2 in person){
    console.log([key2]);   //  it shows all the variable present inside the object
}

for(let key3 in person){
    console.log(`${key3} : ${person[key3]}`);  // it shows both value and pair
}

// Object.keys Method

console.log(Object.keys(person));  // this shows all the variable present inside the object

for(let key4 of Object.keys(person)){
    console.log(person[key4]);   // this shows all the value of variable present inside the object
}

for(let x of Object.values(person)){
    console.log(`${person["x"]} : ${[x]}`);
}