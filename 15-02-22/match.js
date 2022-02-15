let text="testing: 1. 2, 3"; //sample test
let pattern= /\d+/g;
console.log(pattern.test(text));
console.log(text.search(pattern));
console.log(text.match(pattern));
console.log(text.replace(pattern, "#"));
console.log(text.split(/\D+/));
console.log(typeof null);
if(null==undefined){
    console.log("Yes");
}
else{
    console.log("No");
}
if(null===undefined){
    console.log("Ok");
}
else{
    console.log("No Ok");
}
