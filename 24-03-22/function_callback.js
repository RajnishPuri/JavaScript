// fuction callback

function Myfunc2(name){
    console.log("Inside my fuction 2");
    console.log(`My name is ${name}`);
}

function Myfunc1(callback){
    console.log("I'm Inside Myfunc1");
    callback("Raj");
}

Myfunc1(Myfunc2);


function newfunc(){
     console.log("hello world!");
}

function display(a){
    console.log(a);
}

display(newfunc);
// Higher Order Function
function func1(){
    function hello(){
    console.log("hello world");
}
return hello;
}

const ans=func1();
console.log(ans);
