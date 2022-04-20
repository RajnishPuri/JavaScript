// console.log("Hello World!\n");

// Methods
// Function Inside Object

"use strict"

const user1 = {
    Name: "Rajnish Puri",
    Roll: 1,
    About: function () {
        console.log(`My Name is ${this.Name} And My Roll Number is ${this.Roll}`);
    }
}

user1.About();


const user2 = {
    Name: "Abhishek Kumar",
    Roll: 2,
    About: () => {
        console.log(`My Name is ${this.Name} And My Roll Number is ${this.Roll}`);
    }
}

user2.About();

function UserInfo() {
    console.log(`My Name is ${this.Name} And My Roll Number is ${this.Roll}`);
}

const user3 = {
    Name: "Shubham Kumar",
    Roll: 3,
    About: UserInfo,
}


user3.About();



const UserInfo2 = function(){
    console.log(`My Name is ${this.Name} And My Roll Number is ${this.Roll}`);
}

const user4 = {
    Name: "Ujjwal Raj",
    Roll: 4,
    About: UserInfo2,
}


user4.About();



const UserInfo3 = ()=>{
    console.log(`My Name is ${this.Name} And My Roll Number is ${this.Roll}`);
}

const user5 = {
    Name: "Prashant Kumar",
    Roll: 5,
    About: UserInfo3,
}

user5.About();

// call method is used for calling property of some object in different object
// Like here user6 does not have any property name About so we borrowed About property from user1
// I can't borrow this about property from user4 (Reason I don't know, why?)

const user6 = {
    Name: "Abhijeet",
    Roll: 6,
    
}

user1.About.call(user6);


// similarly, we can use : 

function UserInfo4(Hobby, Profession){
    console.log(`My Name is ${this.Name} And My Roll Number is ${this.Roll}. My Hobby is ${Hobby} and My Profession is ${Profession}`);
}

const user7 = {
    Name: "Kushagra",
    Roll: 7,
    
}

UserInfo4.call(user7, "Chess", "Software Developer");


// Apply Method : It is similar to call method but in this we pass argument in the array : 


function UserInfo5(Hobby, Profession){
    console.log(`My Name is ${this.Name} And My Roll Number is ${this.Roll}. My Hobby is ${Hobby} and My Profession is ${Profession}`);
}

const user8 = {
    Name: "Krishna",
    Roll: 8,
    
}

UserInfo5.apply(user8, ["Chess", "Software Developer"]);

// Bind method is used for store data in function


function UserInfo6(Hobby, Profession){
    console.log(`My Name is ${this.Name} And My Roll Number is ${this.Roll}. My Hobby is ${Hobby} and My Profession is ${Profession}`);
}

const user9 = {
    Name: "Nandu",
    Roll: 9,
    
}

const data = UserInfo6.bind(user9, "Chess", "Software Developer");
data();



