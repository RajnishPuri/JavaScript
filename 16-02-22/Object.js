// globalThis(raj);
let s="hello";
console.log(s.toUpperCase());
console.log(s);

let o={x:1}, p={x:1};
if(o===p){
    console.log("yes");
}
else{
    console.log("No");
}

let a=[1, 2, 3];
let b=[1, 2, 3];
if(a===b){
    console.log("yes");
}
else{
    console.log("No");
}

let c = [];                    //The Variable a refers to an empty arary
let d = c;                     //Now d refers to the same array
d[0]=1;                        //Mutate the array referred to by variable d
c[0];                          //change is also visible in variable c
if(c===d){                     //c and d refer to the same object, so they are equal
    console.log("yes");
    console.log(c, d);
}

//copy the object

let e=["a", "b", "c"];
let f=[];
for(let i=0;i<e.length;i++){
    f[i]=e[i];
}
console.log(f);

let g=Array.from(f);
console.log(g);

function equalarrays(e, f){
    if(e===f){
        console.log("Yes Matches\n");
        
    }
    else{
        console.log("No Match");
        console.log(e);
        console.log(f);
    }
}

equalarrays(e, f);

let h=["a", "b", "c"];
let i=h;

function equalarray(h, i){
    if(h===i){
        console.log("Yes Matches\n");
        
    }
    else{
        console.log("No Match");
        console.log(e);
        console.log(f);
    }
}

equalarray(h, a);

function arraycheck(h, i){
    if (h===i) {
        console.log("m");
        return true;
    }
    if (h.length!==i.length) {
        console.log("n");
        return false;
    }
    for(let j=0;j<h.length;j++){
        if (h[j]!==i[j]) {
            console.log("o");
            return false;
        }
    }
    console.log("p");
    return true;
}

arraycheck(h, i);
