// Iterables
// Something at which we can apply for loop
// like, string, array

const Name = "Raj";

for(let Firstletter of Name){
    console.log(Firstletter);
}

const FirstName = ["Raj", "Rajnish", "Puri"];
for(let name of FirstName){
    console.log(name);
}

FirstName.forEach((Name1)=>{
    console.log(Name1);
})

const Users = [
     {UserId : 1, UserName : "Raj", UserRoll : 1},
     {UserId : 2, UserName : "Abhijeet", UserRoll : 2},
     {UserId : 3, UserName : "Ujjwal", UserRoll : 3},
     {UserId : 4, UserName : "Shubham", UserRoll : 4},
];

const Username = Users.map((username)=>username.UserName);

console.log(Username);

// Object is not Iterable
// Example

// const Key = {key1 : "value1", key2 : "value2"};

// for(let key of Key){
//     console.log(key);  // Error : Key is not iterable
// }

// Array Like Object

// those who can access by its index and those who have length property
//
const NAME = "Rajnish";
console.log(NAME.length);
console.log(NAME[3]);

