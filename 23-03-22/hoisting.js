// we can access our function before declaration in function declaration method
// example

hello();

function hello(){
    console.log("Hello World!");
}

hello();
hello();

console.log("no");

hello();

// But you can not access function before function delaration in expressional function and arrow function
// Example

Myname(); // here you get ReferenceError 

const Myname = function(){
    console.log("Raj");
}

Myname();

MyName();     // here you again get ReferenceError
const MyName = () => console.log("Rajnish");
MyName();

// difference of let, const and var

console.log(x);  // it gives ReferenceError and do not run
let x=5;
console.log(x);


console.log(y);  // it gives ReferenceError and do not run
const y=7;
console.log(y);


console.log(z);   //it gives undefined but it will run without any reaason. This is known as Hoisting.
var z=7;
console.log(z);