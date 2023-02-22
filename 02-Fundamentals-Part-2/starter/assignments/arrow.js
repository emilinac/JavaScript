'use strict';
let percentageOfWorld3 = (country, population) =>{
    let percentage = (population / 7900) * 100;
    return `${country} has ${percentage} percentage of the worlds population!`;
}
console.log(percentageOfWorld3('China', 1441));
console.log(percentageOfWorld3('Russia', 143));
console.log(percentageOfWorld3('Moldova', 2.615));


// teachers explanation

// const percentageOfWorld3 = population => (population / 7900) * 100;
// const percPortugal3 = percentageOfWorld3(10);
// const percChina3 = percentageOfWorld3(1441);
// const percUSA3 = percentageOfWorld3(332);
// console.log(percPortugal3, percChina3, percUSA3);