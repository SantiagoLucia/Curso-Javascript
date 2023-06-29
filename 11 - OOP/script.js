'use strict';
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const santi = new Person('Santiago', 1992);
// console.log(santi);

// // PROTOTYPES
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// santi.calcAge();

// Person.prototype.species = 'Homo Sapiens';

// console.log(santi.__proto__.__proto__);

// const arr = [2, 3, 5, 4, 232, 5, 6];
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

///////////////////////////////////////////

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const santiago = new PersonCl('Santiago', 1996);
console.log(santiago);

// getters and setters

const account = {
  owner: 'Santi',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
