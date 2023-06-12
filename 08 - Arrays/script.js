"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log([...arr]);

// SPLICE (modifica el original)
arr.splice(-2);
console.log(arr);

// REVERSE (modifica el original)
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["h", "i", "j", "k"];
arr.reverse();
console.log(arr);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(" - "));

/////////////////////////////////////////

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// getting last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log("Santiago".at(-1));

/////////////////////////////////////////

console.log(movements);

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

movements.forEach((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

/////////////////////////////////////////

// MAP
console.log(currencies);
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach((curr) => {
  console.log(curr);
});

//////////////////////////////////////////

// MAP METHOD

console.log(movements);
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

// FILTER METHOD

const movementsDeposited = movements.filter((mov) => mov > 0);
console.log(movementsDeposited);

// REDUCE METHOD

const balance = movements.reduce((acum, cur, i, arr) => acum + cur, 0);
console.log(balance);

const maxBalance = movements.reduce(
  (max, cur) => (max > cur ? max : cur),
  movements[0]
);
console.log(maxBalance);

// FIND METHOD

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account.movements);

// SOME (similar a include)

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits); // true

// EVERY (true si todos los elementos satisfacen la cond)

const allDeposits = movements.every((mov) => mov > 0);
console.log(allDeposits); // false

// Separate callback
console.log("--SEPARATE CALLBACK--");
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// FLAT AND FLATMAP

const arrr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// SORTING

// strings
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort()); // mutate original array

// numbers
movements.sort((a, b) => a - b); // ascending order
console.log(movements);

// more ways to creating and filling arrays

const x = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(x); // [1, 2, 3, 4, 5, 6, 7]

// callback function
const roll = () => Math.trunc(Math.random() * 6) + 1;

const arrayRolls = Array.from({ length: 1000 }, roll);
console.log(arrayRolls);
