// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
//
// console.log("Jonas");
// console.log(23);
//
// let firstName = "Jonas";
// console.log(firstName);
//
// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);
//
// let year;
// console.log(year);
// console.log(typeof year);
//
// year = 1995;
// console.log(typeof year);
//
// console.log(typeof null);
//
// let age = 30;
// age = 31;
//
// const birthYear = 1991;
//  birthYear = 1990;
// const job;
//
// var job = 'Programmer';
// job = 'teacher';
//
// lastName = 'Sanduleac';
// console.log(lastName);

// const  now = 2037;
// const ageEmily = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageEmily,ageSarah);
//
// console.log(ageEmily * 2, ageEmily / 10, 2 ** 3);
//2 ** 3 is 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Emily';
// const lastName = 'Sanduleac';
// console.log(firstName + ' ' + lastName)
//
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4 // x = x * 4 = 100
// x ++; // x = x + 1 = 101
// x --; // x = x - 1 = 100
// x --; // x = x - 1 = 99
// console.log(x);

// comparison operator

// console.log(ageEmily > ageSarah); //>, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// console.log(25-10-5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);
// const averageAge = (ageEmily + ageSarah) / 2
// console.log(ageEmily, ageSarah, averageAge);

// const firstName = 'Emily';
// const job = 'teacher';
// const birthYear = '2003';
// let year = 2023;

// const emily = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(emily);

// const newEmily = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

// console.log(newEmily);
//
// console.log(`Just a regular string`);
//
// console.log('string with \n\ ' +
//     'multiple \n\
//     lines')
//
// console.log(`string with
// multiple
// lines`)

// const age = 18;
// const isOldEnough = age >= 18;

// if (isOldEnough){
//     console.log('Sarah can start driving!')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah has ${yearsLeft} more years until she can start driving!`)
// }

// const birthYear = 2003;
// let century
// if (birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// let inputYear = '2003';
// console.log(Number(inputYear) + 18)
// console.log(inputYear + 18);
//
// console.log(Number('Emily'));
// console.log(typeof NaN);
//
// console.log(String(23), 23);
//
// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' / '2');
//
// let n = '1' + 1;
// n = n - 1;
// console.log(n);
//
// let x = '1' + 3 - 4;
// x = x - 1
// console.log(x);

// 5 falsy values: 0, '', undefined, null, NaN.
// everything else is truly like any number above zero of anything other than an empty string.

// console.log(Boolean(0));
// console.log(Boolean('Emily'));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean(''));

// let money = 0;
// if (money) {
//     console.log(`Don't spend it all!`);
// } else {
//     console.log(`You should get a jog!`);
// }
//
// let height = 0;
// if (height >= 0) {
//     console.log(`YAY! Height is defined`);
// } else {
//     console.log(`Height is undefined`);
//  comment for above code. using a >= sign you can make 0 a defined variable if not it will be undefined

// const age = 18;
// if (age === 18) console.log('You just became an adult:D (strict)');
//
// if (age == 18) console.log('You just became an adult:D (loose)');
//
// let favorite = Number(prompt("What's my favorite number?"));
//
// console.log(favorite);
//
// if (8 === favorite) {
//     console.log('You guessed my favorite number!');
// } else if (favorite === 4) {
//     console.log('4 is one of my other favorite numbers!');
// } else if (favorite === 2) {
//     console.log('2 is one of my other favorite numbers!');
// } else {
//     console.log('Sorry that is not my favorite you can try again.');
// }
//
// if (favorite !== 8) {
//     console.log('Why not 8?');
// }

// let hasDriverLicense = true; // A
// let  hasGoodVision = true; // B
//
// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense)

// let shouldDrive = hasDriverLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Sarah is not able to drive. Someone else should drive.')
// }

// let isTired = false; // C
// console.log(hasDriverLicense || hasGoodVision || isTired);
//
//
//
// if (hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Sarah is not able to drive. Someone else should drive.')
// }


// let day = 'monday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan the week.');
//         console.log('Go to grocery store.');
//         break
//     case 'tuesday':
//         console.log('Learn coding.');
//         break
//     case 'wednesday':
//         console.log('Get the house ready for mom to come');
//         break
//     case 'thursday':
//     case 'friday':
//         console.log('Drive mom to vikas house.');
//         break
//     case 'saturday':
//         console.log('Go to the gym and do a full body work out.');
//         break
//     case 'sunday':
//         console.log('Go to church');
//     break
//     default:
//         console.log('Not a valid day.')
// }

// let day = 'friday';
//
// if (day === 'monday') {
//     console.log('Plan the week.');
//     console.log('Go to grocery store.');
// } else if (day === 'tuesday') {
//     console.log('Learn coding.');
// } else if (day === 'wednesday') {
//     console.log('Get the house ready for mom to come');
// } else if (day === 'thursday' || 'friday') {
//     console.log('Drive mom to vikas house.');
// } else if (day === 'saturday') {
//     console.log('Go to the gym and do a full body work out.');
// } else if (day === 'sunday') {
//     console.log('Go to church');
// } else {
//     console.log('Not a valid day.')
// }
//
// if (23 > 10) {
//     let str = '23 is bigger';
// }
// let me = 'Emily';
// console.log(`I'm ${2037 - 2003} years old ${me}!`)

// let age = 23;
// age >= 18 ? console.log('I like to drink wine;)') :
    // console.log('I like to drink water.');

// let drink = age >= 18 ? 'wine': 'water';
// console.log(drink);
//
// let drink2;
// if (age >= 18){
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);
//
// console.log(`I like to drink ${age >= 18 ? 'wine': 'water'}`);

