// Clone Ussing Object.assign

// when you create object it stored in Heap memory 

const obj1 = {
    key1:"value1",
    key2:"value2",
}


// if you simply do this:
const obj2 = obj1; 
const obj3 = {...obj1}    // slice Method
const obj4 = Object.assign({}, obj1);  // Assign Method

console.log(obj1);
console.log(obj2);

// if you add something in obj1 then it automatically add in obj2 because obj1 is not clonned in obj2, obj2 stores the address of obj1

// example : 

obj1.key3 = "value3";
console.log(obj1);
console.log(obj2);
console.log(obj3);    // Slice Method
console.log(obj4);    // Object.assign Method



// for this we can use two ways
// 1. slice method
// 2. Object.assign

