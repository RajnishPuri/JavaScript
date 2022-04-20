// EvalError -	An error has occurred in the eval() function

// RangeError - 	A number “out of range” has occurred
// ReferenceError - 	An illegal reference has occurred
// SyntaxError - 	A syntax error has occurred
// TypeError - 	A type error has occurred
// URIError - 	An error in encodeURI() has occurred


let Name = "RAJNISH";
if(Name==undefined){
    throw new Error("This is Not Undefined");
}
else{
    console.log("This is Undefined");
}

try{
    console.log("We are inside try block");
    functionRaj();   // this code will not run and give an error and pass to catch for alternative of this problem
}

catch(error){
    console.log("Any Problem");
}

finally{
    console.log("Finally we will run this");
}

function factorial(x){
    if(x<0) throw new Error("x is NEGATIVE");
    let f;
    for(f=1;x>1;f*=x,x--);
    return f;
}

try{
    // ASK THE USER TO ENTER A NUMBER
    let n = Number(prompt("Please Enter a Positive Integer", ""));
    let f = factorial(n);
    // DISPLAY THE RESULT
    alert(n + "! = " + f);
}
catch(ex){       // WHEN THE USER INPUT IS NOT VALID, WE ENDUP HERE
    alert(ex);   // TELL THE USER WHAT THE ERROR IS
}

function parseJSON(s){
    try{
        return JSON.parse(s);
    }
    catch{
        return undefined;
    }
}

console.log(parseJSON(5));

function f(o){
    if(o===undefined)debugger;
    console.log("hello");
}

f();

let date = new Date();
console.log(date);
