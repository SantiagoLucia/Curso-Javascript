'use strict';

// function logger() {
//     console.log('My name is Santiago');
// }
// // calling / running / invoking function
// logger();


// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);


// Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1992);
// console.log(age1);


// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1992);
// console.log(age2);


// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);


// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const dolphinsAverage = calcAverage(44, 23, 71);
// const koalasAverage = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins > avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas > avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log('No team wins!');
//     }
// }
// checkWinner(dolphinsAverage, koalasAverage);


// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Santiago';
// console.log(friends);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const ages = [calcAge(years[0]), calcAge(years[1])];
// console.log(ages);

// const newLength = friends.push('Jay');
// console.log(friends, newLength);

// friends.unshift('John');
// console.log(friends);

// const popped = friends.pop();
// console.log(friends, popped);

// const shifted = friends.shift();
// console.log(friends, shifted);

// console.log(friends.indexOf('Steven'));
// console.log(friends.includes('Steven'));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven.');
// }


// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);


// const santiago = {
//     firstName: 'Santiago',
//     lastName: 'Lucia Privitera',
//     age: 2022 - 1992,
//     job: 'Programmer',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(santiago);

// console.log(santiago.firstName);

// const interestedIn = prompt('What do you want to know about Santiago? (firstName, lasName, age, job, friends)');

// if (santiago[interestedIn]) {
//     console.log(santiago[interestedIn]);
// } else {
//     console.log('Peticion invalida.');
// }

// santiago.location = 'Argentina';
// console.log(santiago);
// console.log(santiago.friends[0]);