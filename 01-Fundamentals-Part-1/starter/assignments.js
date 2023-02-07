// Values and Variables
//
// let country = 'United States';
// let continent = 'North America';
// let population = '331.9';
// console.log(country);
// console.log(continent);
// console.log(population);

// Data Types

// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// let, const and var

// language = 'English';
// const country = 'United States';
// const continent = 'North America';
// const isIsland = false;
// isIsland = true;

// Basic Operators

// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const description1 =
//     country +
//     ' is in ' +
//     continent +
//     ', and its ' +
//     population +
//     ' million people speak ' +
//     language;
// console.log(description1);

// Coding Challenge #1 and #2

// Data 1

// let markMass1 = 79;
// let markHeight1 = 1.69;
// let johnMass1 = 92;
// let johnHeight1 = 1.95;
//
// let markBMI = markMass1 / markHeight1 ** 2;
// let johnBMI = johnMass1 / johnHeight1 ** 2;
// console.log(markBMI);
// console.log(johnBMI);
//
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);
//
// if (markBMI > johnBMI) {
//     console.log("Mark's BMI is higher than John's");
// } else {
//     console.log("John's BMI is higher than Mark's");
// }
//
// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
// } else {
//     console.log(`John's ${johnBMI} BMI is higher than Mark's ${markBMI}!`);
// }


// Data 2
//
// let markMass2 = 95;
// let markHeight2 = 1.88;
// let johnMass2 = 85;
// let johnHeight2 = 1.76;
//
// let markBMI2 = markMass2 / markHeight2 ** 2;
// let johnBMI2 = johnMass2 / johnHeight2 ** 2;
// console.log(markBMI2);
// console.log(johnBMI2);
//
// let johnHigherBMI = markBMI2 < johnBMI2;
// console.log(johnHigherBMI);
//
// if (markBMI2 > johnBMI2) {
//     console.log("Mark's BMI is higher than John's");
// } else {
//     console.log("John's BMI is higher than Mark's");
// }
//
// if (markBMI2 > johnBMI2) {
//     console.log(`Mark's BMI ${markBMI2} is higher than John's ${johnBMI2}!`);
// } else {
//     console.log(`John's ${johnBMI2} BMI is higher than Mark's ${markBMI2}!`);

// Strings and Template Literals

// const description1 =
//     country +
//     ' is in ' +
//     continent +
//     ', and its ' +
//     population +
//     ' million people speak ' +
//     language;
// console.log(description1);

// const description2 = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`
// console.log(description2);

// if / else Statements

// if (population > 33) {
//     console.log(`America's population is ${population - 33} above the average of 33:)`)
// } else {
//     console.log(`America's population is ${33 - population} million below average:( `)
// }

// Type Conversion and Coercion

// let x = '9' - '5'; // x = 4
// let y ='19' - '13' + '17'; // y = 617
// let z = '19' - '13' + 17; // z = 23
// let a = '123' < 57; // a = false
// let b = 5 + 6 + '4' + 9 - 4 - 2; // b = 1143
//
// console.log(x, y, z, a, b);

//Equality Operators: == vs. ===

// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
//
// if (1 === numNeighbours) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('There are multiple borders.')
// } else {
//     console.log('There are no borders.')
// }

// Logical Operators

// if (language === 'english' && population < 50 && !isIsland)
// {
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

// Coding Challenge #3

// let dolphins = (96 + 108 + 89) / 3
// let koalas = (88 + 91 + 110) / 3

// console.log(dolphins, koalas);

// if (dolphins > koalas) {
//     console.log('Dolphins are the winners against the Koalas!');
// }
// else if (dolphins < koalas) {
//     console.log('Koalas are the winners against the Dolphins!');
// } else {
//     console.log(`It's a tie between both!`);
// }

// // Data 2

// let dolphins1 = (97 + 112 + 101) / 3
// let koalas1 = (109 + 95 + 123) / 3
// console.log(dolphins1, koalas1);

// if (dolphins1 >= 100 && dolphins1 > koalas1) {
//     console.log('Dolphins are the winners against the Koalas!');
// }
// else if (koalas1 >= 100 && dolphins1 < koalas1) {
//     console.log('Koalas are the winners against the Dolphins!');
// }
// else if (dolphins1 === koalas1) {
//     console.log('It was a tie between the teams!');
// }

// // Data 3

// let dolphins2 = (97 + 112 + 101) / 3
// let koalas2 = (109 + 95 + 106) / 3
// console.log(dolphins2, koalas2);

// if (dolphins2 >= 100 && dolphins2 > koalas2) {
//     console.log('Dolphins are the winners against the Koalas!');
// }
// else if (koalas2 >= 100 && dolphins2 < koalas2) {
//     console.log('Koalas are the winners against the Dolphins!');
// }
// else if (dolphins2 === koalas2) {
//     console.log('It was a tie between the teams!');
// } else {
//     console.log('No one wins');

// The switch Statement

// let language = 'romanian';
//
// switch (language) {
//     case 'mandarin':
//     case 'chinese':
//         console.log(`'MOST' number of native speakers!`);
//         break
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break
//     case 'english':
//         console.log('3rd place');
//         break
//     case 'hindi':
//         console.log('Number 4');
//         break
//     case 'arabic':
//         console.log('5th most spoken language');
//         break
//     default:
//         console.log('Great language too :D');
// }

// The Conditional (Ternary) Operator

// let country = 'United States';
// let population = '331.9';
// population >= 33 ? console.log(`${country}'s population is above average`): console.log(`${country}'s population is bellow average`);

// console.log( `${country}'s population is ${population > 33 ? 'above' : 'below'} average`);

// codding challenge 4

// let bill = 430;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
//
//
// if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
// } else {
//     tip = bill * 0.2;
// }
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


