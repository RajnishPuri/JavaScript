// some method

// It is used when any one of condition will true from list of condition then it returns true if not it will return false

const number = [1, 3, 8, 7];

const result = number.some((numbers)=>numbers%2===0);

console.log(result);


const products = [
    {productid : 1, productname : "mobile", price : 12000},
    {productid : 2, productname : "Laptop", price : 15000},
    {productid : 3, productname : "TV", price : 20000},
];

const result2 = products.some((product)=>product.price>18000);

console.log(result2);