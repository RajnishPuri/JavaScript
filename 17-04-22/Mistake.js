const user1 = {
    Name : "Rajnish Puri",
    Roll : 1,
    About : function(){
        console.log(`My Name is ${this.Name} And My Roll Number is ${this.Roll}`);
    }
}

// We don't have to do this type of mistake

const myFunc = user1.About;
myFunc();     // This gives my undefined undefined value because this method used in line 5 can't get the object name

// for this purpose we have to use bind method 

const myfunc = user1.About.bind(user1);
myfunc();