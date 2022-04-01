// Methods : When we call any function inside the Object then its called Method.
"use strict";
const Info = function(){
    console.log(`My Name is ${this.Name} and My Roll is ${this.Roll}`);
}

const person = {
    Name : "Raj",
    Roll : 18,
    about : Info
}

// console.log(person.about());
person.about();

// "this" is the Reserved keyword for access the current object properties

// Like we can not access Name of the property without this keyword, If we try to write :

//  console.log(`My Name is ${Name} and My Roll is ${Roll}`);  --> we get Name is not defined and Roll is not defined Error.

const person2 = {
    Name : "Rajnish",
    Roll : 2,
    about : Info,
}
const person3 = {
    Name : "Rajnish Puri",
    Roll : 3,
    about : Info,
}

person2.about();
person3.about();

console.log(this);
console.log(window);

  
console.log(this===window);

function myfunc(){
    console.log(this);
}
myfunc();    // undefined due to "use strict"