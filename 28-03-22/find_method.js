// find method

const array = ["Raj", "Hello", "Days"];

const result = array.find((String)=>String.length===3);

console.log(result);

const Users = [
    {UserId : 1, UserName : "Raj"},
    {UserId : 2, UserName : "Ujjwal"},
    {UserId : 3, UserName : "Shubham"},
    {UserId : 4, UserName : "Prashant"},
    {UserId : 5, UserName : "Abhishek"},
]

const result2 = Users.find((user)=>user.UserName.length===3);
const result3 = Users.find((user)=>user.UserId===3);

console.log(result2);
console.log(result3);