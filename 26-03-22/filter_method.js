// Filter Method 

// We gonna use filter method when we have to filter particular elements from the array and save it into the new element 

// Filter Method returning function always return boolean Value i.e. True or False.

// Program to filter even number from the array to the new array.

const Myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Even = Myarray.filter((number) => {
    return (number % 2 === 0);
});

console.log(Even);

// Program to filter Prime Numbers from the array

// const Prime = ((newnumber) => {
//     let i=2;

//     return ((newnumber) => {
//         while(i<newnumber){
//             if(newnumber%i===0){
//                 console.log("false", i);
//                 return false;
//             }
//             i++;
//         }
//         console.log("true", i);
//         return true;
//     });
// });

const Prime = function (number) {
    let i = 2;
    while (i < number) {
        if (number % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

// Always use function as parameters in the filter method

const primenumbers = Myarray.filter(Prime);



console.log(primenumbers);

