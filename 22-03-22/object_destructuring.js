// Object Destructuring

const Human = {
    Name : "Raj",
    Roll : 35,
    Branch : "C.S.E",
    Hobbies : ["chess", "cricket"],
};

const {Name , Roll} = Human;

console.log(`My Name is ${Name} And My Roll Number is ${Roll}`);

// If you want to change the variable name from Name to anything what you want then

const {Branch:Class , Hobbies:intrest}= Human;
console.log(`I am studing in Branch ${Class} And My Hobbies are ${intrest}`);


// Destructure array inside the object

const [game1, game2] = intrest;
console.log(game1,"and" ,game2);

const [objgame1, objgame2] = Human.Hobbies;
console.log(objgame1,"and", objgame2);

// Nested array object 

const users = [
    {userId : 1, Name : "Raj" , Roll : 35},
    {userId : 2, Name : "Ujjwal" , Roll : 38}, 
    {userId : 3, Name : "Shubham" , Roll : 12}
];

for(let user of users){
    // console.log(user.userId);
    // console.log(user.Name);
    // console.log(user.Roll);
    console.log(`UserId is : ${user.userId}, Name is : ${user.Name}, Roll is : ${user.Roll}`);
}

// Destructuring nested array object

const [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);

const [{Name: NewName, Roll : NewRoll}, {Name: NewName2}, {userId}] = users;

console.log(NewName);
console.log(NewRoll);
console.log(NewName2);
console.log(userId);


