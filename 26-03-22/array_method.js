// forEach Method

const Myarray = [1, 2, 3, 4, 5, 6];
let a;
Myarray.forEach(function(number, index){
    a=number*2;
    console.log(`Numbers after multiplication : ${a} at index : ${index}`);
})


const info = [
    {Name : "Raj", Roll : 1},
    {Name : "Abhijeet", Roll : 2},
    {Name : "Ujjwal", Roll : 3},
    {Name : "Shubham", Roll : 4},
];

// info.forEach(function(number){
//     console.log(number.Name);
//     console.log(number.Roll);
// })

// info.forEach((user)=>{
//     console.log(user.Name);
// })

let show = function(user){
        console.log(user.Name);
    };

info.forEach(show)


