// param destructturing

// object
// React

// function destruct(obj){         // one way to destructure object
//     console.log(obj.FirstName);
//     console.log(obj.Roll);
//     console.log(obj.LastName);
//     console.log(obj.Branch);

// }

// destruct(person);

const person = {
    FirstName: "Raj",
    LastName: "Puri",
    Roll : 35,
    Branch : "C.S.E",
}

const student = {
    Roll : 01,
    Name : "Raj",
    Subject : "CSE",
}

const Class = ({Name, Roll, Subject}) => {
    console.log(Roll, Subject, Name);
}

function destruct({FirstName, Roll}){    // object destructuring
    console.log(FirstName, Roll);
}

destruct(person);

Class(student);

