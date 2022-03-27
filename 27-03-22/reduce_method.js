// Reduce Method

const numbers = [1, 2, 3, 4, 5, 6, 7];

// aim : sum of all the numbers in array

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

// accumulator   ,   currentValue    ,     return
//      1        ,        2          ,        3
//      3        ,        3          ,        6
//      6        ,        4          ,        10
//      10       ,        5          ,        15
//      15       ,        6          ,        21
//      21       ,        7          ,        28

console.log(sum);

// Real Life Use of Reduce

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

let add = 0;
const FinalPrice = Users.reduce((totalprice, CurrentProduct) => {
    return (totalprice + CurrentProduct.Products.forEach((number) => {
        add = add + number.Price;
    }));
}, 0);

console.log(add);

// let add = 0;
// const FinalPrice = Users.reduce((totalprice, CurrentProduct) => {
//     return (totalprice + CurrentProduct.Products.forEach((number) => {
//         while (number["Serial Number"] >= 5 && number["Serial Number"] <= 8) {
//             add = add + number.Price;
//             console.log(add);

//         }
//     }));
// }, 0);
