//There are three types of cloning method in the array
// First is using slice method
// Second is using concat method
// Thirs way is using Spred operator
// array is reference type datatyepe so we have to use slice method for cloning

//SLICE METHOD
// let arr1 = ["raj", "puri"];
// let arr2 = arr1;
// let arr2 = arr1.slice(0);
// arr1.push("hello");

//CONCAT METHOD
// let arr2 = [].concat(arr1);
// arr1.push("hello");
// console.log(arr1);
// console.log(arr2);
// console.log(arr1===arr2);

//SPREAD OPERATOR
// let arr2=[...arr1];
// arr1.push("hello");
// console.log(arr1);
// console.log(arr2);
// console.log(arr1===arr2);
