const addition = (num1, num2, num3) => {
    return (num1 + num2 + num3);
}

console.log(addition(3, 4, 5));

const isEver = (num) => {
    return (num%2 === 0);
}

// you can remove parenthesis if you use only one parameter 
// example

const isOdd = num => {
    return (num%2 !== 0);
}

console.log(isOdd(5));
console.log(isEver(6));

// if you want to return something from function then you use

const even = (num) => num%2===0;
console.log(even(5));

const sum = (num4, num5, num6) => num4=num5+num6;


console.log(sum(2, 3, 5));