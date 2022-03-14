// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

const person={
    name:"Raj",
    age:21,
    hobbies:["chess", "cricket"],
};

console.log(person);

const differentperson={
    name:"Raj",
    age:21,
    "person hobbies":["chess", "cricket"],
};

console.log(differentperson["person hobbies"]);