'use strict';
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}
let descriptionUnitedStates =  describeCountry('United States', '131', 'Washington DC' );
console.log(descriptionUnitedStates);
let descriptionMoldova = describeCountry('Moldova', '2', 'Chisinau');
console.log(descriptionMoldova);
let descriptionSpain = describeCountry('Spain', '40', 'Madrid');
console.log(descriptionSpain);