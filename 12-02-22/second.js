console.log("\u{1f600}");
let msg="hello, " + "World!";
console.log(msg);
let greeting="Welcome to my blog," + " " +msg;
console.log(greeting);
let s="Hello, World";
console.log(s.normalize("NFD"));

console.log("x".padEnd(3));
console.log("x".padStart(3));
console.log("x".padStart(3, "*"));
console.log("x".padEnd(3, "-"));

console.log(" Test ".trim());
console.log(" Test ".trimStart());
console.log(" Test ".trimEnd());