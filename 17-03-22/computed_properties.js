// Computed Property

const x = "Name";
const y = "Roll";

const xvalue = "Rajnish Puri";
const yvalue = 10;

// let person1 = {};

// let arr1 = [x, y];
// let arr2 = [xvalue, yvalue];

// console.log(arr1, arr2);

// for(arr1, arr2 in person1){
//     person1[arr1]=person1[arr2];
// }

// console.log(person1);

let person1 = {
    [x] : xvalue,
    [y] : yvalue,
};

console.log(person1);

let person2 = {};

person2[x]=xvalue;
person2[y]=yvalue;

console.log(person2);
