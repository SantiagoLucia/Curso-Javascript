'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...others) {
    console.log(mainIngredient);
    console.log(others);
  },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sol 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// //spread operator ...
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // joins 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// // real world example
// const ingredientes = [
//   prompt('Lets make pasta! Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredientes);
// restaurant.orderPasta(...ingredientes);

// // Objects

// const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);

// REST oeprator
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, , rissotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, rissotto, otherFood);

// Objets
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// functions
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach(num => {
    sum += num;
  });
  console.log(sum);
};

// add(2, 3);
// add(5, 2, 3, 4, 5);

const x = [23, 34, 1123];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// short circuiting
// console.log('--- OR ---');
// console.log(2 || 'Jonas'); // 2
// console.log('' || 'Jonas'); // Jonas
// console.log(undefined || null); // null

const guests = restaurant.numGuests || 10;
// console.log(guests);

// console.log('--- AND ---');
// console.log(0 && 'Jonas'); //corta en el primer false 0
// console.log(2 || 'Jonas');

// Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
//es lo mismo que
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Or me devolvia 10, este operador me sirve para que retorne el 0
// nullish values are null and undefined
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

const rest1 = {
  name: 'Capri',
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};

rest1.numGuest ??= 10;
//console.log(rest1.numGuest); // 0

rest2.numGuest ||= 10;
//console.log(rest2.numGuest); // 10

rest2.owner &&= '<ANNONYMOUS>'; // annonymous es como reemplazar porque el primer valor es verdadero
//console.log(rest2.owner);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// };

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// optional chaining
// console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // console.log(`On ${day}, we open at ${open}`);
}

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.com' }];
// console.log(users[0]?.name ?? 'User array empty');

//////////////////

const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
// console.log(openStr);

const values = Object.values(openingHours);
// console.log(values);

const entries = Object.entries(openingHours);
for (const [key, { open, close }] of entries) {
  // console.log(key, open, close);
}

////////////////////

// SETS

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissotto',
  'Pasta',
  'Pizza',
]);

// console.log(ordersSet, ordersSet.size);
// console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic Bread');
// console.log(ordersSet);
ordersSet.delete('Rissotto');
// console.log(ordersSet);
// ordersSet.clear();

for (const order of ordersSet) {
  // console.log(order);
}

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set('santiagoluciaprivitera').size);

// MAPS

const rest = new Map();
rest
  .set('name', 'Classico Italiano')
  .set(1, 'Firenze, Italy')
  .set(2, 'Lisbon, Portugal')
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// console.log(rest.get('categories'));
rest.delete(2);
// console.log(rest.size);

const question = new Map([
  ['question', 'What is the best programming languaje in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Wrong!'],
]);
// console.log(question);

// convert objects to map
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') {
    // console.log(`${key}: ${value}`);
  }
}

/////////////////////////////////////////////

// RESUMEN
/*
- Arrays
Cuando necesito una lista ordenada de valores, y puede
haber duplicados.
*/
const tasksArr = ['Code', 'Eat', 'Code'];
// ['Code', 'Eat', 'Code']

/*
- Sets
Cuando necesito trabajar con valores únicos.
Remover valores duplicados de un array.
*/
const TaskSet = new Set(['Code', 'Eat', 'Code']);
// {'Code', 'Eat'}

/*
- Objects
Mas facil acceder a valores con . y []
Usar cuando el objecto incluye funciones
Cuando trabajo con JSON (se puede transfomar a map)
*/
const taskObj = {
  task: 'Code',
  date: 'today',
  repeat: true,
};

/*
- Maps
Mejor performance. 
Las keys pueden ser cualquier tipo de datos.
Mas facil para iterar.
Usar cuando necesito listas clave-valor simples.
Cuando las keys no son strings.
*/
const taskMap = new Map([
  ['task', 'Code'],
  ['date', 'today'],
  ['repeat', true],
]);

//////////////////////////////////

// STRINGS

const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.lastIndexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got lucky');
//   }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('9E');
// checkMiddleSeat('3C');

// const passanger = 'jOnAS'; // Jonas
// const passangerLower = passanger.toLowerCase();
// const passangerCorrect =
//   passangerLower[0].toUpperCase() + passangerLower.slice(1);
// console.log(passangerCorrect);

// const priceGB = '288,97E';
// const priceUS = priceGB.replace('E', '$').replace(',', '.');
// console.log(priceUS);

// const avion = 'Airbus A320';
// console.log(plane.includes('A320'));

// console.log(avion.startsWith('Airbus'));

// console.log('a+very+nice+string'.split('+'));

// const [firstName, lastName] = 'Santiago Lucia'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const word of names) {
//     //namesUpper.push(word[0].toUpperCase() + word.slice(1));
//     namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');

// const message = 'Go to gate 23!';
// console.log(
//   message.padStart(message.length + 5, '*').padEnd(message.length + 10, '*')
// );

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(1234273412));

// const message2 = 'Bad weather... All Departues Delayed... ';
// console.log(message2.repeat(5));

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const events_array = flights.split('+');

const getCode = str => str.slice(0, 3).toUpperCase();

for (const e of events_array) {
  const [event, from, to, time] = e.split(';');

  const event_out =
    (event.startsWith('_Delayed') ? '🕘' : '') + event.replaceAll('_', ' ');
  const from_out = getCode(from);
  const to_out = getCode(to);
  const time_out = time.replace(':', 'h');
  const output =
    `${event_out} from ${from_out} to ${to_out} (${time_out})`.padStart(45);
  console.log(output);
}
