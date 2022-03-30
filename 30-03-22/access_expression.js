// Access Epression

// expression?.identifier
// expression?.[expression]

// This Conditional property access --->
//In a regular property access expression using . or [],you get a TypeErroe if the expression on the left evaluates to null or undefined. You can use ?. and ?.[] syntax to guard against erroes to this type.

// This form of property access expression is sometimes called "Optional Chaining" because its also works for longer "chained" property access expression linke this one : 

const a = {
    b : null,
}

console.log(a.b?.c.d);  // =>  undefined

// a is an object, a.b is a valid property access expression. But the value of a.b is null, so a.b.c would throw a TypeError. By using ?. instead of . we avoid the TypeError, and a.b?.c evaluate to undefined. This means that (a.b?.c).d will throw a TypeError, because that expression attempts to access a property of the value undefined. 

// But this is very important part of "Optional Chaining" - a.b?.c.d (without parantheses) simply evaluates to undefined and does not throw an error. This is because property access with ?. is "short-circuiting" : if the subexpression to the left of ?. evaluates to null or undefined , then the entire expression immediately evaluates to undefined without any further property access attempts.

// Of Course, if a.b is an object, and if that object has no proberty named c, then a.b?.c.d will throw a TypeError, and we will want to use conditional property access:

let first = {
    second : {}
};

// console.log(first.second?.third.fourth); // => TypeError
console.log(first.second?.third?.fourth);   // => undefined

// Conditional Property Access is also possible using ?.[] instead of []. In the expression a?.[b][c], if the value of a is null or undefined then the entire expressionimmediately evaluates to undefined, and subexpressions b and c are never even evaluated.

let e;             // Oops, We forgot to initiatize this variable! 
let index = 0;     
try{
    a[index++];    // Throws TypeError
}
catch(f){
    index;         // => 1 : increament occurs before TypeError is thrown
}
console.log(e?.[index++]);  // => undefined : because e is undefined
// a[index++]; 
console.log(index);         // => 1 : not incremented because ?.[] short-circuits     
console.log(e[index++]);    // !TypeError : can't index undefined.

