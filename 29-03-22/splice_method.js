// Splice Method
// Start, Delete, Insert

const myArray = [1, 2, 3, 4, 5];

// deleting the item

myArray.splice(1, 2);
console.log(myArray);

// Inserting the item and deleting the item

myArray.splice(1, 1, 2, 3, 5);
//
// first 1 means starting point i.e. 4
// second 1 means deleting 1 value start from 4 i.e. 4
// remaining value is for insertion after deletion takes place insert the value from index 1
// answer will be : 1, 2, 3, 4, 5

console.log(myArray);
