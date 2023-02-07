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

function fruitProcessor (apples, oranges){
    let juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

let appleJuice = fruitProcessor(5,0);
console.log(appleJuice)

let appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice)