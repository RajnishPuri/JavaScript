let strname="string name";
let symname= Symbol("propname");
let symname2= Symbol("prop");
console.log(typeof strname);
console.log(typeof symname);
let o={};
o[strname]=1;
o[symname]=2;
o[symname2]=3;
console.log(o[strname]);
console.log(o[symname]);
console.log(o[symname2]);
console.log(symname);
console.log(symname2);

let name=null;
name=toString();
console.log(name);

let s=Symbol("sym_x");
console.log(s.toString());