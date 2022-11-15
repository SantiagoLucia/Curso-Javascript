'use strict';

// const x = 23;
// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1985));

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

const maxTemperatures = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    const day = i + 1;
    str += `${temp}°C in ${day} days ... `;
  }
  return '... ' + str;
};
console.log(printForecast(maxTemperatures));
