// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;
// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;

// if (markBMI > johnBMI) {
//     console.log(`Marks BMI (${markBMI}) is higher than Johns BMI (${johnBMI})`);
// } else {
//     console.log(`Johns BMI (${johnBMI}) is higher than Marks BMI (${markBMI})`);
// }


// const inputYear = '1991';
// console.log(Number(inputYear) + 18);
// console.log(String(23));

// const day = 'friday';

// switch (day) {
//     case 'monday':
//         console.log('Lunes');
//         break;

//     case 'tuesday':
//         console.log('Martes');
//         break;

//     default:
//         console.log('Es otro día');
// }

// const age = 23;
// age >= 18 ? console.log('Puede manejar') : console.log('No puede manejar');

// const drink = age >= 18 ? 'Vino' : 'Agua';
// console.log(drink);


const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * .20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);