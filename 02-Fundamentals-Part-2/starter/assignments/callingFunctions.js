'use strict';


function percentageOfWorld1 (population) {
    return (population / 7900) * 100;
}
function describePopulation (country, population){
    let percentage = percentageOfWorld1(population);
    return`${country} has ${population} million people which is about ${percentage} of the world.`;
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('Russia', 143));
console.log(describePopulation('Moldova', 2.615));