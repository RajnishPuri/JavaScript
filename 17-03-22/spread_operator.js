// uses of spread operator in array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newarray;
newarray = [...arr1, ...arr2];
console.log(newarray);

// used in spread any iterable value

let name = "rajnish";
let newstring = [...name];
console.log(newstring);

// used in object

const obj1 = {
    key1 : "value1",
    key2 : "value 2",
};

const obj2 = {
    key1 : "value5",
    key3 : "value3",
    key4 : "value4",
};

// const newobject = {...obj2, ...obj1, key69 : "value69"};
const newobject = {...obj1, ...obj2, key69 : "value69"};
// const newobject = {...["item1", item2]};
// const newobject = {..."abcdefghijklmnopqrstuvwxyz"};

console.log(newobject);

