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
function calcAge1 (birthYear) {
    return 2037 - birthYear;
}
let age1 = calcAge1(1991);
console.log(age1);

// function expression
let calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

let age2 = calcAge2(2003);
console.log(age2, age1);

