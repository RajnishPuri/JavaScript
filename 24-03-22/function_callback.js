// fuction callback

function Myfunc2(){
    console.log("Inside my fuction 2");
}

function Myfunc1(callback){
    callback();
}

Myfunc1(Myfunc2);



// 