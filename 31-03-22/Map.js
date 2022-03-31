// Maps


// Maps are iterable but object is not iterable

// Store Data In Ordered Fashion

// Store key value pair (like object)
// Duplicate Keys are not allowed like objects


// Different between Maps and Object

// Objects can only have string or symbol
// as key

const person = {
    Name : "Raj",
    Roll : 1,
    1 : 3,
}

// for(let detail of person){
//     console.log(detail);    // TypeError because objects are not iterable 
// }

// Object literal
// key -> string
// key ->symbol

// for(let detail in person){
//     console.log(typeof detail);  // key 1 is also string
// }

// in maps you can use anything as key
// like array, number, string

const Extradata = new Map();
Extradata.set("Id", 123);
Extradata.set("age", 12);
Extradata.set(12, 12);
Extradata.set(2, "two");
Extradata.set([1, 2, 3], "three");
Extradata.set({1:'one'}, "three");

console.log(Extradata);
console.log(Extradata.get("age"));
console.log(Extradata.get(12));
console.log(Extradata.get(2));


// Map is iterable

for(let data of Extradata){
    console.log(data);
}

for(let data of Extradata.keys()){
    console.log(data, typeof data);
}

for(let [key, value] of Extradata){
    console.log(Array.isArray(key));
    console.log(key, value);
}

const person1 = {
    id :1,
    firstname:"Raj",
}
const person2 = {
    id :2,
    firstname:"Rajnish",
}

const Moreinfo = new Map();
Moreinfo.set(person1, {age : 10, gender : "Male"});
Moreinfo.set(person2, {age : 11, gender : "Male"});

console.log(Moreinfo);
console.log(person2.id);
console.log(Moreinfo.get(person1).gender);
console.log(Moreinfo.get(person2).gender);