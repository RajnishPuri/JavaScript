console.log("\u{1F600}");
const caf\u{e9} = 1;
const cafe\u{301} = 2;

console.log(café);
console.log(café);

let x=0
;[x, x+1, x+2].forEach(console.log);

let a = 4;
let b = 2;
console.log(() => a + b + 100);

let array=[1, 2, 5, 3, 9, 4];
console.log(array.sort());

console.log(Math.pow(2, 53));
console.log(Math.round(0.51));
console.log(Math.ceil(0.2));
console.log(Math.floor(0.6));
console.log(Math.abs(-5));
console.log(Math.max(2, 53, 34));
console.log(Math.min(2, 53, -2));
console.log(Math.random());
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(3));
console.log(Math.pow(3, 1/3));
console.log(Math.sin(0));
console.log(Math.log(10));
console.log(Math.log(100)/Math.LN10);
console.log(Math.log(512)/Math.LN2);
console.log(Math.exp(3));

console.log(2/0);
console.log(-2/0);

console.log(0/0);
console.log(Infinity/Infinity);

console.log(Math.sqrt(-3));

console.log(Number.MAX_VALUE);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

console.log(NaN);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE/2);
console.log(-1/Infinity);

console.log(Number.parseInt(4));
console.log(isNaN(3));
console.log(isNaN());
console.log(Number.EPSILON);

let z= (.3)-(.2);
let y= .2-.1;

console.log(z, y);

console.log(BigInt(1234n));
console.log(0b11111n);
console.log(0o7777n);
console.log(0x8000000000000n);

console.log(BigInt(Number.MAX_SAFE_INTEGER));
let string = "1".repeat(5) + "0".repeat(100);
console.log(BigInt(string));

let timestamp= Date.now();
console.log(timestamp);
let now=new Date();
console.log(now);
let ms=now.getTime();
console.log(ms);
let iso=now.toISOString();
console.log(iso);