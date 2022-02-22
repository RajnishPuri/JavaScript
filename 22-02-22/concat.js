let arr1 = ["hello", "23"];

// using slice method and concat method
let arr2 = arr1.slice(0).concat(["hello"]);
// using concat method
let arr3 = [].concat(arr1, "low", "34");
// using spred operator and concat method
let arr4 = [...arr1, "hello", 54];


console.log(arr4);
console.log(arr3);
console.log(arr2);