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

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// const santiago = new PersonCl('Santiago', 1996);
// console.log(santiago);

// // getters and setters

// const account = {
//   owner: 'Santi',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

//////////////////////////////////////////////////////////////
// Inheritance

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

////////////////////////////////////////////////////////////////

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  _aproveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._aproveLoan(val)) {
      this.deposit(val);
      return this;
    }
  }
}

const acc1 = new Account('Santiago', 'AR', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(150);
console.log(acc1);

// chaining
acc1.deposit(300).deposit(500).withdraw(400).requestLoan(5000);
console.log(acc1.getMovements());
