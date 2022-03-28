// Every Method

const Number = [2, 4, 6, 8, 10];

const ans = Number.every((number)=>number%2===0);

// callback function ---> true / false (boolean)

// every method ---> true / false (boolean)

console.log(ans);


const products = [
    {productid : 1, productname : "mobile", price : 12000},
    {productid : 2, productname : "Laptop", price : 15000},
    {productid : 3, productname : "TV", price : 20000},
];

const ans2 = products.every((Product)=>Product.price<10000);

console.log(ans2);

