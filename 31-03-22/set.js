// Sets
// It is iterable
// store Data
// Sets also have their own methods
// No index based access
// Order is not guaranteed
// Unique Items Only(No Duplicate Allowed)


// How to make a set : 

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(4);
numbers.add(["item1", "item2"]);
numbers.add(["item1", "item2"]);

console.log(numbers);

if (numbers.has(1)) {
    console.log("Yes");
}
else {
    console.log("No");
}

for (let number of numbers) {
    console.log(number);
}

// console.log(numbers.length);   // => undefined
let index = 0;
numbers.forEach(element => {
    index = index + 1;
});

console.log(index);

const myarray = [1, 2, 3, 4, 5, 6, 1, 2];
const myset = new Set(myarray);

console.log(myset);
console.log(myarray);