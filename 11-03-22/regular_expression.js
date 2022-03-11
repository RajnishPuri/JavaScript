//Regular Expression in Javascript

let reg=/raj/;

console.log(reg);
console.log(reg.source);

let s = "Hello, This is raj here and raj is my nick name";
// Regular literals are used to match expression
// 1. exec() - This function will return an array for match or null for no match

let result = reg.exec(s);
console.log(result);
// This only returns the index position of raj i.e. 15 and array contain "raj"

result = reg.exec(s);
console.log(result);
//if you again run this same matching expression and try to print the index position of other raj then thats not work it will again returns the index position of first one i.e. 15 and an array which contains "raj"

// but if you add global 'g' after that regexp literal for checking for all raj present in that string 

// example

let regg=/raj/g;

let str = "Hello, This is raj here and raj is my nick name";

let globalresult=regg.exec(str);
console.log(globalresult);
//this returns array "raj" with index position 15
globalresult=regg.exec(str);
console.log(globalresult);
//this returns array "raj" wityh index position 28
globalresult=regg.exec(str);
console.log(globalresult);
//this returns null because only 2 raj is available in string str