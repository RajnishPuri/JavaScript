// difference between dot and bracket notation

const person = {
    name : "Raj",
    Age : 23,
    "Person Hobbies" : ["chess", "cricket"],   // if there is spaces between names or punctuation characters, or when it is a number(for arrays), you must use the SQUARE BRACKET NOTATION
};

console.log(person["Person Hobbies"]);
console.log(person["name"]);
console.log(person["Age"]);

// if we want to use value of key1 instead of key1
// here in person we get : 
//  { name: "Raj", Age: 23, "Person Hobbies": (2) […], key1: "rajnishpuri15@gmail.com" }
// And we don't want to write key1 we try to use it's value email instead of key1
// this happen because we wrote person["key1"]="rajnishpuri15@gmail.com"; where key1 is in double quotes so person take key1 as string and use it as value

const key1="email";
person["key1"]="rajnishpuri15@gmail.com";
console.log(person);

// if you want to use value of key
// you just have to remove the double quotation marks from key

const key="email";
person[key]="rajnishpuri15@gmail.com";
console.log(person);
