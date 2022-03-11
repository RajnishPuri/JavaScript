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

// but if you add global FLAG 'g' after that regexp literal for checking for all raj present in that string 

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

// Another flag is 'i' which is case insesitive which means RAj and raj is same 

// 2. Test function which returns 'true' if check is present in s
let check=/raaj/;
let result3=check.test(s);
console.log(result3);

// 3. Match Function - it will return an array of results or null
// its syntax is oposite 
let check2=/raj/g;
let result4=s.match(check2);
console.log(result4);

// 4. Search Function - It will return index of first matching position else return -1
let check3=/raj/g;
let result5=s.search(check3);
console.log(result5);

let new1 = "hello, my name is Raj and I am not rAJ";
//5. Replace Function - Returns all replaced element with new elements
let check4=/raj/ig;
let result6=new1.replace(check4, "Happy");
console.log(result6);