'use strict';
//
// let hasDriverLicense = false;
// let passTest = true;
//
// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log('I can drive');

// let interface = 'audio';
// let private = 534;

// function logger (){
//     console.log('My name is Emily!')
// }
// calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor (apples, oranges){
//     let juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
//
// let appleJuice = fruitProcessor(5,0);
// console.log(appleJuice)
//
// let appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice)


// function declaration
// function calcAge1 (birthYear) {
//     return 2037 - birthYear;
// }
// let age1 = calcAge1(1991);
// console.log(age1);

// function expression
// let calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// let age2 = calcAge2(2003);
// console.log(age2, age1);

// Arrow functions

// let calcAge3 = birthYear => 2037 - birthYear;
// let age3 = calcAge3(1991)
// console.log(age3);

// let yearsUntilRetirement = (birthYear, firstName) => {
//     let age = 2037 - birthYear;
//     let retirement = 65 - age;
//     // return retirement
//     return `${firstName} retires in ${retirement} years!`;
// }
//
// let retirementAge1 = yearsUntilRetirement(1991);
// // console.log(retirementAge1);
// console.log(yearsUntilRetirement(1991, 'Emily'));

// let yearsUntilRetirement = (birthYear, firstName) => {
//     let age = 2037 - birthYear;
//     if (age < 65) {
//         let retirement = 65 - age;
//         return retirement
        // return `${firstName} retires in ${retirement} years!`;
    // } else if (age > 65) {
    //     let retirement = age - 65
    //     return `${firstName} retired ${retirement} years ago!`;
    // }
// }

// let retirementAge1 = yearsUntilRetirement(1991);
// console.log(retirementAge1);
// console.log(yearsUntilRetirement(1971, 'Emily'));



// function cutFruitPieces(fruit){
//     return fruit * 4;
// };
// let fruitProcessor = function (apples, oranges){
//     let applePieces = cutFruitPieces(apples);
//     let orangePieces = cutFruitPieces(oranges);
//
//     let juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// };
// console.log(fruitProcessor(2, 3));

// let calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// let yearsUntilRetirement = function (birthYear, firstName) {
//     let age = calcAge(birthYear);
//     let retirement = 65 - age;
//     return retirement;
    // return `${firstName} retires in ${retirement} years!`;
// }

// console.log(yearsUntilRetirement(1991, 'Emily'));

//
// let friend1 = 'Emily';
// let friend2 = 'Ruben';
// let friend3 = 'Marius';
//
// let friends = ['Emily', 'Ruben', 'Marius'];
// // friends[2] = 'Mark';
// console.log(friends);
//
// // let year = new Array(1991, 1992, 1984, 2018);
//
// console.log(friends[0]);
// console.log(friends[2]);
//
// console.log(friends.length)
// console.log(friends[friends.length - 1]);
//
// friends[2] = 'Mark';
// console.log(friends);
// // friends = ['Bob', 'Alice'] = illegal because you can't change the entire text
//
// let emily = ['Emily', 'Sanduleac', 2037 - 2003, 'teacher', friends];
// console.log(emily);
// console.log(emily.length);
//
// //Exercise
// let calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
//
// let years = [1990, 1967, 2002, 2010, 2018];
// let age1 = calcAge(years[0]);
// let age2 = calcAge(years[1]);
// let age3 = calcAge(years[years.length - 1]);
//
// console.log(age1, age2, age3);
//
// let age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

let friends = ['Emily', 'Ruben', 'Marius'];

// Add elements
let newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // last
let popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('Ruben'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Ruben'));
console.log(friends.includes('Bob'));

if (friends.includes('Ruben')){
    console.log('You have a friend called Ruben');
}