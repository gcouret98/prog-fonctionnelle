// const users = [
//     { name: "John", birthday: "01/01/1990", gender: "male", age: 31 },
//     { name: "Mike", birthday: "02/01/1995", gender: "male", age: 26 },
//     { name: "Sara", birthday: "03/01/1992", gender: "female", age: 29 },
//     { name: "Emily", birthday: "04/01/1985", gender: "female", age: 38 },
//     { name: "David", birthday: "05/01/1989", gender: "male", age: 45 } // Ne sera pas affiché car son age dépasse ma constante ageMax
// ];

// const ageMax = 33;
// const filteredUsers = users.filter(user => user.age <= ageMax);
// console.log(filteredUsers);


// Corrections :

'use strict';
// Exercices 1
const users = [{
    name: 'Cyril',
    date: '1987-03-08',
    gender: 'm'
}, {
    name: 'Sonia',
    date: '1995-01-01',
    gender: 'f'
}];

const usersByAgeMax = (arr, age) =>
    arr.map(user =>
        Object.assign(user, {
            age: Math.abs(
                new Date(Date.now() - new Date(user.date).getTime()).getUTCFullYear() - 1970)
        })
    )
        .filter(user => user.age >= age);

console.log(usersByAgeMax(users, 32));

// Exercices 2

const array = usersByAgeMax(users, 5);

const ageTotal = array.reduce((a, b) => a.age + b.age);
