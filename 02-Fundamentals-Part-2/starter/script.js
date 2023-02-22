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



function cutFruitPieces(fruit){
    return fruit * 4;
};
let fruitProcessor = function (apples, oranges){
    let applePieces = cutFruitPieces(apples);
    let orangePieces = cutFruitPieces(oranges);

    let juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
};
console.log(fruitProcessor(2, 3));
