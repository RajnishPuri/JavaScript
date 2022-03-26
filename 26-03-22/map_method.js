// Map Method

// This method is similar to forEach method but it make new array for which we have to return something from the function 

let Numbers = [1, 2, 3, 4, 5];

Numbers.map((number)=>{
    console.log((Math.pow(number, 2)));
});

// console.log(SquareNumber);

// So We gonna use map method when we have to make a new array with the existing numbers with their operation.

const info = [
    {Name : "Raj", Roll : 1},
    {Name : "Abhijeet", Roll : 2},
    {Name : "Ujjwal", Roll : 3},
    {Name : "Shubham", Roll : 4},
];

let UsersName = info.map((user) => {
    return user.Name;
})

console.log(UsersName);