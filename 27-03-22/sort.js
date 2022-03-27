// Sorting Method

const Users = [
    {
        Name: "User1", UserId: 123, Products: [
            {
                ["Serial Number"]: 1, ["Product Name"]: "Game1", Price: 100
            },
            {
                ["Serial Number"]: 2, ["Product Name"]: "Game2", Price: 200
            },
            {
                ["Serial Number"]: 3, ["Product Name"]: "Game3", Price: 300
            },
            {
                ["Serial Number"]: 4, ["Product Name"]: "Game4", Price: 400
            },

        ]
    },
    {
        Name: "User2", UserId: 456, Products: [
            {
                ["Serial Number"]: 5, ["Product Name"]: "Game5", Price: 500
            },
            {
                ["Serial Number"]: 6, ["Product Name"]: "Game6", Price: 600
            },
            {
                ["Serial Number"]: 7, ["Product Name"]: "Game7", Price: 700
            },
            {
                ["Serial Number"]: 8, ["Product Name"]: "Game8", Price: 800
            },

        ]
    },
    {
        Name: "User3", UserId: 789, Products: [
            {
                ["Serial Number"]: 9, ["Product Name"]: "Game9", Price: 900
            },
            {
                ["Serial Number"]: 10, ["Product Name"]: "Game10", Price: 1000
            },
            {
                ["Serial Number"]: 11, ["Product Name"]: "Game11", Price: 1100
            },
            {
                ["Serial Number"]: 12, ["Product Name"]: "Game12", Price: 1200
            },

        ]

    }
]
let array = [];

Users.sort((a, b)=>{
    return a-b;
});

console.log(Users[Products].forEach((number)=>{
    array = number.Price.sort((a, b)=>{
        return a-b;
    })
}));
    
console.log(array);

