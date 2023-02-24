'use strict';

let calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

let checkWinner = function (avgDolphins,avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}) !`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas won (${avgKoalas} vs. ${avgDolphins})!`);
    } else {
        console.log(`It was a draw!`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test data 2

let scoreDolphins2 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 34, 27);
console.log(scoreDolphins2, scoreKoalas2);
checkWinner(scoreDolphins2, scoreKoalas2);