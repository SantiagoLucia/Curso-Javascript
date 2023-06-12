'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123', 3);
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 500);

///////////////////////////////////////

// const flight = 'LH234';
// const santiago = {
//   name: 'Santiago Lucia',
//   passport: 3923942349,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   passenger.passport === 3923942349
//     ? alert('Checked in')
//     : alert('Wrong passport!');
// };

// // checkIn(flight, santiago);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(santiago);
// checkIn(flight, santiago);

//////////////////////////////////////////

// Higher-order function

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
// const high5 = function () {
//   console.log('✋');
// };
// document.body.addEventListener('click', high5);

////////////////////////////////////////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Santiago');

// Challange
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

////////////////////////////////////////////////

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book('461', 'Santiago');
lufthansa.book('888', 'Jonas');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, '230', 'Sarah Williams');

const flightData = ['589', 'George Cooper'];
book.call(eurowings, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
bookEW('444', 'Steven Williams');
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(500));

// es lo mismo
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.5);
console.log(addVAT2(100));

/////////////////////////////////////////////////

// Funciones que se ejecutan una sola vez

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();

// Closures

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// example 2

const boardPassangers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassangers(180, 5);
